import React from "react";
import Gate from "./components/Gate";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Merch from "./components/Merch";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Gate />
      <Hero />
      <Music />
      <Merch />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
