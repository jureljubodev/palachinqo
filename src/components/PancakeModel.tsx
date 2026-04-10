// components/PancakeModel.tsx
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Group } from "three";
import type { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

import diffuseUrl from "/models/textures/pancake/diffuse.png?url";
import normalUrl from "/models/textures/pancake/normal.png?url";
import occlusionUrl from "/models/textures/pancake/occlusion.png?url";
import roughUrl from "/models/textures/pancake/roughness.png?url";

type Props = {
  url?: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
};

export default function PancakeModel({
  url = "/models/pancake.glb",
  scale = 0.9,
  position = [0, 0.05, 0],
  rotation = [0, 0, 0],
}: Props) {
  const group = useRef<Group>(null);
  const gltf = useGLTF(url) as GLTF;
  const { actions } = useAnimations((gltf as any).animations, group);

  const colorMap = useTexture(diffuseUrl);
  const normalMap = useTexture(normalUrl);
  const aoMap = useTexture(occlusionUrl);
  const roughnessMap = useTexture(roughUrl);

  useEffect(() => {
    colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.flipY = false;
    colorMap.generateMipmaps = true;
    colorMap.minFilter = THREE.LinearMipmapLinearFilter;
    colorMap.magFilter = THREE.LinearFilter;
    colorMap.needsUpdate = true;

    normalMap.colorSpace = THREE.NoColorSpace;
    normalMap.flipY = false;
    normalMap.needsUpdate = true;

    aoMap.colorSpace = THREE.NoColorSpace;
    aoMap.flipY = false;
    aoMap.needsUpdate = true;

    roughnessMap.colorSpace = THREE.NoColorSpace;
    roughnessMap.flipY = false;
    roughnessMap.needsUpdate = true;
  }, [colorMap, normalMap, aoMap, roughnessMap]);

  useEffect(() => {
    if (actions && Object.keys(actions).length) {
      const first = Object.values(actions)[0] as any;
      first.play?.();
      return () => first.stop?.();
    }
  }, [actions]);

  useEffect(() => {
    if (!group.current) return;
    group.current.traverse((obj: any) => {
      if (!obj.isMesh) return;
      const mat = obj.material as THREE.MeshStandardMaterial;
      const geom: THREE.BufferGeometry = obj.geometry;

      if (aoMap && geom && !geom.attributes.uv2 && geom.attributes.uv) {
        geom.setAttribute("uv2", geom.attributes.uv);
      }

      mat.map = colorMap;
      mat.normalMap = normalMap;
      mat.normalScale = new THREE.Vector2(1.15, 1.15);
      mat.aoMap = aoMap;
      mat.aoMapIntensity = 0.55;
      mat.roughnessMap = null;
      mat.roughness = 1.0;
      mat.metalness = 0;
      mat.envMapIntensity = 0;
      mat.needsUpdate = true;

      obj.castShadow = false;
      obj.receiveShadow = false;
    });
  }, [colorMap, normalMap, aoMap, roughnessMap]);

  const baseScale = Array.isArray(scale) ? scale[0] : scale;
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const s = THREE.MathUtils.lerp(0.1, 1, Math.min(1, t * 0.6)) * baseScale;
    group.current.scale.setScalar(s);
    group.current.rotation.x = rotation[0] + Math.sin(t * 0.5) * 0.03;
    group.current.rotation.z = rotation[2] + Math.sin(t * 0.3) * 0.02;
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  );
}
