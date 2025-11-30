"use client";

type TreeLayer = {
  radius: number;
  height: number;
  y: number;
};

const TREE_LAYERS: TreeLayer[] = [
  { radius: 1.55, height: 1, y: -0.9 },
  { radius: 1.25, height: 0.9, y: -0.35 },
  { radius: 1, height: 0.8, y: 0.1 },
  { radius: 0.75, height: 0.7, y: 0.5 },
  { radius: 0.5, height: 0.6, y: 0.85 },
];

type TreeLayersProps = {
  treeColor: string;
  accentColor: string;
  trunkColor: string;
};

function CanopyLayers({
  treeColor,
  accentColor,
}: {
  treeColor: string;
  accentColor: string;
}) {
  return (
    <>
      {TREE_LAYERS.map((layer, index) => (
        <mesh
          key={`${layer.radius}-${layer.y}`}
          castShadow
          position={[0, layer.y, 0]}
          rotation={[0, index * 0.2, 0]}
        >
          <coneGeometry args={[layer.radius * 0.85, layer.height, 64, 1]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? treeColor : accentColor}
            metalness={0.1}
            roughness={0.55}
          />
        </mesh>
      ))}
    </>
  );
}

function TreeTrunk({ color }: { color: string }) {
  return (
    <mesh position={[0, -1.4, 0]} castShadow>
      <cylinderGeometry args={[0.32, 0.4, 1.2, 16]} />
      <meshStandardMaterial color={color} roughness={0.8} />
    </mesh>
  );
}

export default function TreeLayers({
  treeColor,
  accentColor,
  trunkColor,
}: TreeLayersProps) {
  return (
    <>
      <CanopyLayers treeColor={treeColor} accentColor={accentColor} />
      <TreeTrunk color={trunkColor} />
    </>
  );
}
