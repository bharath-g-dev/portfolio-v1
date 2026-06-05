"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  playerRef: React.RefObject<THREE.Mesh | null>;
};

export default function FollowCamera({
  playerRef,
}: Props) {
  const { camera } = useThree();

  useFrame(() => {
    if (!playerRef.current) return;

    const player = playerRef.current;

    const targetPosition = new THREE.Vector3(
      player.position.x + 15,
      player.position.y + 15,
      player.position.z + 15
    );

    camera.position.lerp(
      targetPosition,
      0.05
    );

    camera.lookAt(player.position);
  });

  return null;
}