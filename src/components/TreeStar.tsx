"use client";

import useStarGeometry from "@/hooks/useStarGeometry";

type TreeStarProps = {
  color: string;
};

export default function TreeStar({ color }: TreeStarProps) {
  const geometry = useStarGeometry();

  return (
    <mesh
      geometry={geometry}
      position={[0, 1.3, 0]}
      rotation={[0, 0, Math.PI / 1]}
      castShadow
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}
