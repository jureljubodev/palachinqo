import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ChocolateSteam() {
  const ref = useRef<THREE.Mesh>(null);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#5a2e12") },
    },
    vertexShader: `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec3 pos = position;

    // gentle vertical drift
    pos.y += sin((pos.x * 0.4) + uTime * 0.2) * 0.04;
    pos.y += sin((pos.y * 0.6) + uTime * 0.15) * 0.03;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,
    fragmentShader: `
  uniform vec3 uColor;
  varying vec2 vUv;

  void main() {
    // center UV from (0..1) → (-1..1)
    vec2 uv = vUv * 2.0 - 1.0;

    // radial distance from center
    float d = length(uv);

    // soft circular fade
    float alpha = smoothstep(1.0, 0.4, d) * 0.15;  
    //       outer    inner   max-opacity

    gl_FragColor = vec4(uColor, alpha);
  }
`,
    blending: THREE.NormalBlending,
    transparent: true,
    depthWrite: false,
    depthTest: false,
  });

  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh
      ref={ref}
      position={[0, 0, -1.2]}
      scale={[4.5, 4.5, 1]}
      material={material}
    >
      <planeGeometry args={[2, 2, 50, 50]} />
    </mesh>
  );
}
