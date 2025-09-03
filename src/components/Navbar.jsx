import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Merch", path: "/merch" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-white font-extrabold text-xl tracking-widest">
          VON INTELLEKT
        </Link>
        <nav className="flex gap-6 font-semibold text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-white transition ${
                location.pathname === item.path ? "text-white" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
