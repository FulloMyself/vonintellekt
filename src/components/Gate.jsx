import React, { useState } from "react";
import "./Gate.css";

const Gate = () => {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div className={`gate-container${entered ? " entered" : ""}`}>
      {!entered ? (
        <div className="gate-content">
          <h1 className="gate-logo">VI</h1>
          <button className="gate-enter-btn" onClick={handleEnter}>
            Press Start
          </button>
        </div>
      ) : (
        <div className="main-content">
          {/* Replace this with your main site content */}
          <h2>Welcome to Von Intellekt's World</h2>
        </div>
      )}
    </div>
  );
};

export default Gate;