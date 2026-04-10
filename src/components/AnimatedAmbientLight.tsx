import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AnimatedAmbientLight() {
  const lightRef = useRef<THREE.AmbientLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // tiny intensity wave (0.05 difference)
    const intensity = 0.45 + Math.sin(t * 0.25) * 0.05;

    // tiny warm–cool color shift (almost invisible, but gives life)
    const warm = 0.45 + Math.sin(t * 0.18) * 0.03;
    const cool = 0.42 + Math.sin(t * 0.21) * 0.03;

    if (lightRef.current) {
      lightRef.current.intensity = intensity;
      lightRef.current.color.setRGB(warm, cool, cool * 0.98);
    }
  });

  return <ambientLight ref={lightRef} intensity={0.45} color={"#553522"} />;
}
