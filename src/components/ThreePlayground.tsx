"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { speed, color, metalness, roughness } = useControls("오브젝트", {
    color: "#6d9dfb",
    speed: {
      value: 0.5,
      min: 0,
      max: 2,
      step: 0.1,
    },
    metalness: {
      value: 0.65,
      min: 0,
      max: 1,
      step: 0.05,
    },
    roughness: {
      value: 0.2,
      min: 0,
      max: 1,
      step: 0.05,
    },
  });

  const rimColor = useMemo(() => {
    const base = new THREE.Color(color);
    return base.offsetHSL(0.04, 0.05, 0.1).getStyle();
  }, [color]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * speed;
    meshRef.current.rotation.x = Math.sin(performance.now() * 0.0003) * 0.35;
  });

  return (
    <group>
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1, 0.35, 256, 64]} />
        <meshStandardMaterial
          color={color}
          metalness={metalness}
          roughness={roughness}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <ringGeometry args={[1.9, 2.05, 64]} />
        <meshBasicMaterial color={rimColor} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function ThreePlayground() {
  const { lightIntensity } = useControls("환경", {
    lightIntensity: {
      value: 1.3,
      min: 0.2,
      max: 2,
      step: 0.1,
    },
  });

  return (
    <div className="h-full w-full rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-1.5 shadow-2xl shadow-slate-900/60">
      <div className="h-full w-full overflow-hidden rounded-[22px] bg-slate-950">
        <Canvas
          shadows
          gl={{ antialias: true }}
          className="h-full w-full"
          dpr={[1, 2]}
        >
          <PerspectiveCamera
            makeDefault
            position={[4.5, 3.5, 6]}
            fov={48}
            near={0.1}
            far={50}
          />
          <color attach="background" args={["#030617"]} />
          <fog attach="fog" args={["#030617", 12, 30]} />
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            intensity={lightIntensity}
            position={[6, 6, 4]}
            shadow-mapSize={[1024, 1024]}
          />
          <FloatingTorus />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.65}
            blur={2.8}
            far={4}
          />
          <Environment preset="city" />
          <OrbitControls
            enableDamping
            enablePan={false}
            minDistance={3}
            maxDistance={9}
          />
        </Canvas>
      </div>
    </div>
  );
}
