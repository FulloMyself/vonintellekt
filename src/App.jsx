import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gate from "./components/Gate";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Merch from "./components/Merch";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Gate Overlay */}
      <Gate />

      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/music" element={<Music />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
