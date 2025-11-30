"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points } from "three";

type SnowFieldProps = {
  count?: number;
  area?: [number, number, number];
};

export default function SnowField({
  count = 400,
  area = [10, 6, 10],
}: SnowFieldProps) {
  const pointsRef = useRef<Points>(null);
  const velocities = useMemo(
    () => Float32Array.from({ length: count }, () => 0.4 + Math.random() * 0.4),
    [count]
  );

  const positions = useMemo(() => {
    const [width, height, depth] = area;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * width;
      arr[i * 3 + 1] = Math.random() * height - height / 2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * depth;
    }

    return arr;
  }, [count, area]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const posAttr = points.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    const [width, height, depth] = area;

    for (let i = 0; i < count; i += 1) {
      const base = i * 3;
      arr[base + 1] -= velocities[i] * delta;

      if (arr[base + 1] < -height / 2) {
        arr[base + 1] = height / 2;
        arr[base] = (Math.random() - 0.5) * width;
        arr[base + 2] = (Math.random() - 0.5) * depth;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} position={[0, 1, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#e0edff"
        opacity={0.85}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
