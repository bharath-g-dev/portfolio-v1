"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import Character from "./Character";
import useKeyboardControls from "@/hooks/useKeyboardControls";

export default function Player() {
  const playerRef = useRef<THREE.Group>(null);

  const keys = useKeyboardControls();

  useFrame(() => {
    if (!playerRef.current) return;

    const moveSpeed = 0.1;
    const rotateSpeed = 0.04;

    // Turn left
    if (keys.ArrowLeft) {
      playerRef.current.rotation.y += rotateSpeed;
    }

    // Turn right
    if (keys.ArrowRight) {
      playerRef.current.rotation.y -= rotateSpeed;
    }

    // Forward
    if (keys.ArrowUp) {
      playerRef.current.position.x -=
        Math.sin(playerRef.current.rotation.y) *
        moveSpeed;

      playerRef.current.position.z -=
        Math.cos(playerRef.current.rotation.y) *
        moveSpeed;
    }

    // Backward
    if (keys.ArrowDown) {
      playerRef.current.position.x +=
        Math.sin(playerRef.current.rotation.y) *
        moveSpeed;

      playerRef.current.position.z +=
        Math.cos(playerRef.current.rotation.y) *
        moveSpeed;
    }
  });

  return (
    <group ref={playerRef}>
      <Character />
    </group>
  );
}