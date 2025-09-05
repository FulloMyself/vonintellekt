import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Gate from "./components/Gate";
import TVScreen from "./components/TVScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import MerchGrid from "./components/MerchGrid";

// Import your new page components
// You'll need to create these files if they don't exist yet
import DVDPage from "./pages/DVDPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeGate, setFadeGate] = useState(false);

  const handleEnter = () => {
    setFadeGate(true);
    setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setEntered(true);
      }, 1200); // 1.2s loading animation
    }, 600); // 0.6s fade out
  };

  return (
    <Router>
      {!entered && (
        <>
          <div className={`gate-fade-wrapper${fadeGate ? " gate-fade-out" : ""}`}>
            <Gate onEnter={handleEnter} />
          </div>
          {loading && (
            <div className="gate-loading-overlay">
              <div className="gate-loading-spinner" />
            </div>
          )}
        </>
      )}
      {entered && (
        <TVScreen>
          <Navbar />
          <main>
            <Routes>
              {/* Homepage */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Tiles />
                  </>
                }
              />
              {/* Shop Page */}
              <Route path="/shop" element={<ShopPage />} />
              
              {/* DVD Page */}
              <Route path="/dvd" element={<DVDPage />} />
              
              {/* About Page */}
              <Route path="/about" element={<AboutPage />} />
              
              {/* Catch-all route - redirect to home */}
              <Route path="*" element={
                <>
                  <Hero />
                  <Tiles />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </TVScreen>
      )}
      <style>
        {`
          .gate-fade-wrapper {
            transition: opacity 0.6s cubic-bezier(.4,0,.2,1);
            opacity: 1;
          }
          .gate-fade-out {
            opacity: 0;
            pointer-events: none;
          }
          .gate-loading-overlay {
            position: fixed;
            inset: 0;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s;
          }
          .gate-loading-spinner {
            width: 64px;
            height: 64px;
            border: 6px solid #fff;
            border-top: 6px solid #00ffe7;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            box-shadow: 0 0 32px #00ffe7, 0 0 64px #fff;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes fadeIn {
            from { opacity: 0;}
            to { opacity: 1;}
          }
        `}
      </style>
    </Router>
  );
}

export default App;