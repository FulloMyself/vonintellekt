import React, { useState } from "react";
import TVScreen from "./components/TVScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";

function App() {
  const [entered, setEntered] = useState(true); // Set to true for testing

  return (
    <TVScreen>
      <Navbar />
      <main>
        <Hero />
        <Tiles />
      </main>
      <Footer />
    </TVScreen>
  );
}

export default App;
