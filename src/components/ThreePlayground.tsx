"use client";

import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useControls } from "leva";

import ChristmasTree from "./ChristmasTree";
import SnowField from "./SnowField";

export default function ThreePlayground() {
  const { ambientIntensity, keyLight, rimLight, baseLight } = useControls(
    "조명",
    {
      ambientIntensity: {
        value: 0.35,
        min: 0,
        max: 1,
        step: 0.05,
        label: "환경광",
      },
      keyLight: {
        value: 1.4,
        min: 0.2,
        max: 3,
        step: 0.1,
        label: "메인광",
      },
      rimLight: {
        value: 0.6,
        min: 0,
        max: 2,
        step: 0.1,
        label: "백라이트",
      },
      baseLight: {
        value: 0.5,
        min: 0,
        max: 2,
        step: 0.1,
        label: "기둥광",
      },
    }
  );

  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        className="h-full w-full"
        dpr={[1, 1.25]}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 2.6, 6.5]}
          fov={48}
          near={0.1}
          far={50}
        />
        <color attach="background" args={["#030617"]} />

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          intensity={keyLight}
          position={[5, 6, 5]}
          color="#fdecc8"
        />
        <directionalLight
          intensity={rimLight}
          position={[-4, 5, -3]}
          color="#8ec5ff"
        />
        <spotLight
          intensity={baseLight}
          angle={0.85}
          penumbra={0.6}
          distance={10}
          decay={2}
          position={[0.6, 0.8, 2]}
          color="#ffdfc6"
        />

        <ChristmasTree />
        <SnowField />

        <OrbitControls
          enableDamping
          enablePan={false}
          minDistance={3}
          maxDistance={9}
          target={[0, 0.3, 0]}
        />
      </Canvas>
    </div>
  );
}
