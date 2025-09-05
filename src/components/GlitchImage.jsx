import React, { useRef, useEffect } from "react";
import "./GlitchImage.css";

const ROWS = 20; // Number of glitch rows

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const GlitchImage = ({ src, alt, className = "", style = {} }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrame;
    const rows = Array.from(containerRef.current.children);

    function animate() {
      rows.forEach((row, i) => {
        // Random horizontal offset for each row
        const offset = Math.sin(Date.now() / 400 + i) * random(-8, 8);
        row.style.transform = `translateX(${offset}px)`;
      });
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`glitch-image-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <img src={src} alt={alt} className="tv-glitch-img" />
      <img src={src} alt={alt} className="tv-glitch-img tv-glitch-r" />
      <img src={src} alt={alt} className="tv-glitch-img tv-glitch-g" />
      <img src={src} alt={alt} className="tv-glitch-img tv-glitch-b" />
      <div className="tv-glitch-scanlines" />
      <div className="tv-glitch-flicker" />
      {[...Array(ROWS)].map((_, i) => (
        <div
          key={i}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `0 ${((i / ROWS) * 100).toFixed(2)}%`,
            backgroundSize: "cover",
            height: `${100 / ROWS}%`,
            width: "100%",
            position: "absolute",
            top: `${(i * 100) / ROWS}%`,
            left: 0,
            willChange: "transform",
            transition: "transform 0.1s",
          }}
          aria-label={alt}
        />
      ))}
    </div>
  );
};

export default GlitchImage;