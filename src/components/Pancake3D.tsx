import * as THREE from "three";
import { useMemo, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import PancakeModel from "../components/PancakeModel";

function EnsureTransparent() {
  const { gl, scene } = useThree();
  useEffect(() => {
    if (!gl) return;
    gl.setClearColor(0x000000, 0);
    gl.toneMappingExposure = 1.1;
    if (scene) scene.background = null;
    const canvas = gl.domElement as HTMLCanvasElement | undefined;
    if (canvas) canvas.style.background = "transparent";
  }, [gl, scene]);
  return null;
}

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function GoldenDust({ count = 60 }) {
  const geom = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, [count]);

  const mat = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#ffd873",
        size: 0.02,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
      }),
    []
  );

  const ref = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return <points ref={ref} geometry={geom} material={mat} />;
}

export default function Pancake3D() {
  return (
    <div className="pancake-div" aria-hidden>
      <Canvas
        camera={{ position: [0.6, 0.6, 1.2], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        frameloop="always"
      >
        <EnsureTransparent />

        {/* Lighting — no shadows, no HDRI */}
        <ambientLight intensity={0.7} color="#ffe6ae" />
        <hemisphereLight color="#ffe6ae" groundColor="#4a2613" intensity={0.5} />
        <directionalLight position={[2.5, 4, 2]} intensity={0.9} color="#fff2cf" />
        <directionalLight position={[-2.3, 2.6, -1.8]} intensity={0.5} color="#ffd9a3" />
        <pointLight position={[-1.2, 0.6, 0.9]} intensity={0.2} distance={3} color="#ffd78c" />

        <Suspense fallback={null}>
          <GoldenDust count={60} />
          <PancakeModel scale={1} position={[0, 0.02, 0]} rotation={[-0.4, 0.2, 0]} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate={!prefersReducedMotion}
          autoRotateSpeed={4.7}
        />
      </Canvas>
    </div>
  );
}
