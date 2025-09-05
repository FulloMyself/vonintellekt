import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Gate from "./components/Gate";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Footer from "./components/Footer";
import TVScreen from "./components/TVScreen";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <Gate onEnter={() => setEntered(true)} />}
      <AnimatePresence>
        {entered && (
          <TVScreen>
            <motion.div
              className="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Navbar />
              <main>
                <Hero />
                <Tiles />
              </main>
              <Footer />
            </motion.div>
          </TVScreen>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
