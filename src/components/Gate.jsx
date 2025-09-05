import React from "react";
import "./Gate.css";

const Gate = ({ onEnter }) => (
  <div className="gate-container">
    <div className="gate-content">
      <h1 className="gate-logo"> </h1>
      <button className="gate-enter-btn" onClick={onEnter}>
        Press Start
      </button>
    </div>
  </div>
);

export default Gate;