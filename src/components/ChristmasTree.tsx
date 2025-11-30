"use client";

import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import type { Group } from "three";

import TreeLayers from "./TreeLayers";
import TreeStar from "./TreeStar";
import TreeOrnaments from "./TreeOrnaments";

export default function ChristmasTree() {
  const treeGroup = useRef<Group>(null);

  const { treeColor, accentColor, trunkColor, starColor, spinSpeed } =
    useControls("트리", {
      treeColor: "#19825d",
      accentColor: "#13724f",
      trunkColor: "#4c2f1c",
      starColor: "#f9d15b",
      spinSpeed: {
        value: 0.2,
        min: 0,
        max: 0.8,
        step: 0.02,
      },
    });

  useFrame(({ clock }, delta) => {
    if (!treeGroup.current) return;
    treeGroup.current.rotation.y += delta * spinSpeed;
    treeGroup.current.rotation.z = Math.sin(clock.elapsedTime * 0.6) * 0.04;
    treeGroup.current.position.y =
      Math.sin(clock.elapsedTime * 0.8) * 0.04 * 0.4;
  });

  return (
    <group ref={treeGroup} position={[0, 0, 0]}>
      <TreeLayers
        treeColor={treeColor}
        accentColor={accentColor}
        trunkColor={trunkColor}
      />

      <TreeOrnaments />
      <TreeStar color={starColor} />
    </group>
  );
}
