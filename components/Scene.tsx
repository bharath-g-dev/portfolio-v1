"use client";

import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ground from "./Ground";
import { useRef } from "react";
import Player from "./Player";
import {
  Environment,
  Sky,
  ContactShadows
} from "@react-three/drei";

export default function Scene() {
    const playerRef = useRef<THREE.Group>(null);
  return (
    <Canvas
      camera={{
        position: [20,20,20],
        }}
    >
      <ambientLight intensity={2} />
      <Sky sunPosition={[100, 20, 100]} />

<Environment preset="sunset" />

<ContactShadows
  position={[0, 0, 0]}
  opacity={0.5}
  scale={100}
/>

      <directionalLight
        position={[10, 10, 5]}
      />
      

      <Player />

    </Canvas>
  );
}