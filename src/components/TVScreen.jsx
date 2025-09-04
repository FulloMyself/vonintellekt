// TVScreen.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

import Hat from "./models/Hat";
import DVD from "./models/DVD";
import Camera from "./models/Camera";

const TVScreen = () => {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* CRT frame effect */}
      <div className="absolute inset-0 border-[20px] border-gray-900 rounded-[2rem] shadow-[0_0_30px_rgba(0,255,0,0.2)] pointer-events-none" />

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)] mix-blend-overlay pointer-events-none" />

      {/* 3D scene */}
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Hat position={[-2, 1, 0]} />
        </Float>

        <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
          <DVD position={[2, -1, 0]} />
        </Float>

        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
          <Camera position={[0, 2, -1]} />
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Overlay Menu */}
      <div className="absolute bottom-8 flex gap-8 text-white font-mono text-lg">
        <a href="#artists">Artists</a>
        <a href="#projects">Projects</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default TVScreen;
