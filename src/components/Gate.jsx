import React from "react";

const gateIcons = [
  { src: "/src/assets/hat.gif", alt: "Hat", style: { left: "25%", top: "40%" } },
  { src: "/src/assets/dvd.gif", alt: "DVD", style: { left: "55%", top: "55%" } },
  { src: "/src/assets/camera.gif", alt: "Camera", style: { left: "45%", top: "30%" } },
];

const Gate = ({ onEnter }) => (
  <div className="relative w-full h-screen bg-black flex items-center justify-center">
    {/* CRT frame effect */}
    <div className="absolute inset-0 border-[20px] border-gray-900 rounded-[2rem] shadow-[0_0_30px_rgba(0,255,0,0.2)] pointer-events-none" />

    {/* Scanline effect */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_3px)] mix-blend-overlay pointer-events-none" />

    {/* Spinning GIF icons */}
    <div className="absolute inset-0 pointer-events-none">
      {gateIcons.map((icon, i) => (
        <img
          key={i}
          src={icon.src}
          alt={icon.alt}
          style={{
            position: "absolute",
            width: "120px",
            ...icon.style,
            animation: "float 3s ease-in-out infinite",
          }}
        />
      ))}
    </div>

    {/* Enter Button */}
    <button
      className="relative z-10 px-8 py-4 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-200 transition"
      onClick={onEnter}
    >
      Enter
    </button>

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

export default Gate;
