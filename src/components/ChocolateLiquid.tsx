import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ChocolateLiquid({
  mouse,
}: {
  mouse: { x: number; y: number; nx: number; ny: number };
}) {
  const mesh = useRef<THREE.Mesh>(null);

  const shader = {
    uniforms: {
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#5a2e12") }, // lighter brown chocolate
    },
    vertexShader: `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // --- SELF-INTERFERING WAVES ---
    float w1 = sin(pos.x * 1.8 + uTime * 0.6);
    float w2 = sin(pos.y * 2.2 - uTime * 0.45);

    float w3 = sin((pos.x + pos.y) * 1.4 + uTime * 0.35);
    float w4 = sin((pos.x - pos.y) * 1.6 - uTime * 0.5);

    float base = (w1 + w2) * 0.010;
    float cross = (w3 * w4) * 0.020;
    float micro = sin((pos.x * 8.0) + (pos.y * 10.0) + uTime * 2.0) * 0.003;

    pos.z += base + cross + micro;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,
    fragmentShader: `
uniform vec3 uColor;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {
  vec3 color = uColor;

  // ----- warm chocolate highlight -----
  float d = distance(vUv, uMouse);
  float specular = pow(1.0 - d, 4.0);
  vec3 warmTint = vec3(0.6, 0.3, 0.1);

  // blend highlight
  color = mix(color, warmTint, specular * 0.7);

  gl_FragColor = vec4(color, 1.0);
}
`,
  };

  const material = new THREE.ShaderMaterial({
    uniforms: shader.uniforms,
    vertexShader: shader.vertexShader,
    fragmentShader: shader.fragmentShader,
    side: THREE.DoubleSide, // ← fixes see-through from behind
    transparent: false, // ← forces solid chocolate
    depthWrite: true,
    depthTest: true,
  });

  useFrame((state) => {
    shader.uniforms.uTime.value = state.clock.getElapsedTime();
    material.uniforms.uMouse.value.set(mouse.x, mouse.y);
  });

  return (
    <mesh
      ref={mesh}
      position={[0, -0.8, -0.6]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[6.1, 6.1, 6.1]}
      material={material}
    >
      <planeGeometry args={[3, 3, 200, 200]} />
    </mesh>
  );
}
