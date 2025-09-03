import React, { useState } from "react";
import Gate from "./components/Gate";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Gate onEnter={() => setEntered(true)} />}
      {entered && (
        <div className="app opacity-0 transition-opacity duration-700">
          <Navbar />
          <main>
            <Hero />
            <Tiles />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
