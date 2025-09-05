import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gate from "./components/Gate";
import TVScreen from "./components/TVScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import MerchGrid from "./components/MerchGrid";

function ShopPage() {
  return (
    <div className="shop-page">
      <h2 className="text-center text-xl font-bold mb-6">Von Intellekt Shop</h2>
      <MusicPlayer />
      <MerchGrid />
    </div>
  );
}

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
      }, 1200);
    }, 600);
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
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Tiles />
                  </>
                }
              />
              <Route path="/shop" element={<ShopPage />} />
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
