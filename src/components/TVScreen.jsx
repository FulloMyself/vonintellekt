// TVScreen.jsx
import React from "react";
import GlitchImage from "./GlitchImage";

const icons = [
  { src: "/hat.gif", alt: "Hat", style: { left: "30%", top: "35%" } },
  { src: "/dvd.gif", alt: "DVD", style: { left: "60%", top: "60%" } },
  { src: "/camera.gif", alt: "Camera", style: { left: "50%", top: "25%" } },
];

const TVScreen = () => (
  <div className="relative w-full h-screen bg-black flex items-center justify-center">
    {/* CRT frame effect */}
    <div className="absolute inset-0 border-[20px] border-gray-900 rounded-[2rem] shadow-[0_0_30px_rgba(0,255,0,0.2)] pointer-events-none" />

    {/* Scanline effect */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)] mix-blend-overlay pointer-events-none" />

    {/* Spinning GIF icons */}
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "120px",
            ...icon.style,
          }}
        >
          <GlitchImage src={icon.src} alt={icon.alt} />
        </div>
      ))}
    </div>

    {/* Overlay Menu */}
    <div className="absolute bottom-8 flex gap-8 text-white font-mono text-lg">
      <a href="#artists">Artists</a>
      <a href="#projects">Projects</a>
      <a href="#shop">Shop</a>
      <a href="#contact">Contact</a>
    </div>

    {/* Add keyframes for floating effect */}
    <style>
      {`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg);}
          50% { transform: translateY(-20px) rotate(10deg);}
          100% { transform: translateY(0px) rotate(0deg);}
        }
      `}
    </style>
  </div>
);

export default TVScreen;
