import React from "react";

const Navbar = () => (
  <header className="sticky top-0 z-20 backdrop-blur-md bg-black/80 border-b border-white/5">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <a href="#home" className="font-extrabold tracking-widest text-white">
        VON INTELLEKT
      </a>
      <nav className="flex gap-6 font-semibold text-white/90">
  {["Artists", "Projects", "Shop", "Contact"].map((link) => (
    <a
      key={link}
      href={`#${link.toLowerCase()}`}
      className="relative after:block after:absolute after:h-[2px] after:w-0 after:bg-white after:bottom-0 after:left-0 after:transition-all hover:after:w-full"
    >
      {link}
    </a>
  ))}
</nav>
    </div>
  </header>
);

export default Navbar;
