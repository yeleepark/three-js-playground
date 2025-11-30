"use client";

import { useMemo } from "react";

type RingConfig = {
  radius: number;
  y: number;
  count: number;
  tilt?: number;
};

const RING_CONFIGS: RingConfig[] = [
  { radius: 1.2, y: -1.3, count: 6, tilt: 0 },
  { radius: 1, y: -0.7, count: 5, tilt: 0.3 },
  { radius: 0.55, y: -0.02, count: 5, tilt: 0.15 },
  { radius: 0.5, y: 0.35, count: 4, tilt: -0.2 },
];

export default function TreeOrnaments() {
  const positions = useMemo(() => {
    const result: Array<[number, number, number]> = [];
    RING_CONFIGS.forEach(({ radius, y, count, tilt = 0 }) => {
      for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * Math.PI * 2 + tilt;
        result.push([
          Math.cos(angle) * radius,
          y + (Math.sin(angle * 2) * 0.04 || 0),
          Math.sin(angle) * radius,
        ]);
      }
    });
    return result;
  }, []);

  return (
    <group>
      {positions.map(([x, y, z], index) => (
        <mesh
          key={`ornament-${index}`}
          position={[x, y, z]}
          castShadow
          scale={0.82 + (index % 3) * 0.04}
        >
          <sphereGeometry args={[0.0595, 32, 32]} />
          <meshStandardMaterial
            color="#e4343d"
            emissive="#7a0d11"
            emissiveIntensity={0.15}
            metalness={0.45}
            roughness={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}
