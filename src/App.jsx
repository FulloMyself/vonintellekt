import React, { useState } from "react";
import Gate from "./components/Gate";
import TVScreen from "./components/TVScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";

function App() {
  const [entered, setEntered] = useState(true);

  return (
    <>
      {!entered && <Gate onEnter={() => setEntered(true)} />}
      {entered && (
        <TVScreen>
          <Navbar />
          <main>
            <Hero />
            <Tiles />
          </main>
          <Footer />
        </TVScreen>
      )}
    </>
  );
}

export default App;
