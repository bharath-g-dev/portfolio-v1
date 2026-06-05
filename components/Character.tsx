"use client";

import { useFBX } from "@react-three/drei";

export default function Character() {
  const model = useFBX("/models/human.fbx");

  return (
    <primitive
      object={model}
      scale={0.01}
      rotation={[0, Math.PI, 0]}
    />
  );
}