import { useEffect, useRef } from "react";

export type MouseMoveData = {
  x: number;   // 0 → 1 (UV space)
  y: number;   // 0 → 1 (UV space)
  nx: number;  // -1 → 1 (normalized x)
  ny: number;  // -1 → 1 (normalized y, flipped for 3D)
};

export default function MouseTracker({ onMove, }: { onMove: (data: MouseMoveData) => void; }) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.querySelector(".pancake-div");

    if (!containerRef.current) return;

    const div = containerRef.current.getBoundingClientRect();

    const move = (e: MouseEvent) => {
      const x = (e.clientX - div.left) / div.width; // 0 → 1
      const y = (e.clientY - div.top) / div.height; // 0 → 1

      onMove({
        x,
        y,
        nx: x * 2 - 1, // -1 → +1
        ny: (y * 2 - 1) * -1, // flip Y for 3D
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [onMove]);

  return null;
}
