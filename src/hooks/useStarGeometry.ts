"use client";

import { useMemo } from "react";
import * as THREE from "three";

export default function useStarGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape();
    const outer = 0.35 * 0.5;
    const inner = outer * 0.42;
    for (let i = 0; i < 5; i += 1) {
      const theta = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(theta) * outer;
      const y = Math.sin(theta) * outer;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
      const thetaInset = theta + Math.PI / 5;
      shape.lineTo(Math.cos(thetaInset) * inner, Math.sin(thetaInset) * inner);
    }
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.18 * 0.5,
      bevelEnabled: true,
      bevelThickness: 0.06 * 0.5,
      bevelSize: 0.05 * 0.5,
      bevelSegments: 5,
      curveSegments: 32,
    });

    geometry.center();
    return geometry;
  }, []);
}

