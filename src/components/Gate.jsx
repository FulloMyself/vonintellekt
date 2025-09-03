import React, { useState } from "react";

const Gate = ({ onEnter }) => {
  const [hidden, setHidden] = useState(false);
  const year = new Date().getFullYear();

  const enter = () => {
    setHidden(true);
    if (onEnter) onEnter();
  };

  return (
    <div
      className={`fixed inset-0 grid place-items-center bg-black transition-opacity duration-600 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-labelledby="gate-cta"
    >
      <div className="text-center select-none">
        <div
          id="gate-cta"
          role="button"
          tabIndex={0}
          aria-label="Enter site"
          className="font-mono font-bold tracking-widest text-white inline-block px-6 py-3 border border-white rounded-full cursor-pointer"
          onClick={enter}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && enter()}
        >
          TAP / CLICK TO ENTER
        </div>
        <div className="mt-4 text-gray-400 text-xs">
          © {year} VON INTELLEKT — All media reserved.
        </div>
      </div>
    </div>
  );
};

export default Gate;
