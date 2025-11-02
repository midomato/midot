"use client";

import { Canvas, useFrame } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function GlowingCube() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // 0.5〜1.0 の範囲で発光をゆらす
    const intensity = 0.5 + Math.sin(t * 2) * 0.25;
    (mesh.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
      intensity;
  });

  return (
    <mesh ref={mesh} rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#8000ff"
        emissive="#8000ff"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function Cube() {
  return (
    <div className="">
      <Canvas camera={{ position: [2, 2, 3] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#b080ff" />
        <GlowingCube />
      </Canvas>
    </div>
  );
}
