// TVScreen.jsx
import React from "react";
import "./TVScreen.css";

const TVScreen = ({ children }) => (
  <div className="tv-tube-bg">
    <div className="tv-tube-border">
      <div className="tv-tube-scanlines" />
      <div className="tv-tube-content">{children}</div>
    </div>
  </div>
);

export default TVScreen;
