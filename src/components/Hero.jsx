import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]); // subtle parallax

  return (
    <section className="grid place-items-center min-h-[92vh] text-center px-6">
      <motion.h1
        className="text-[clamp(64px,18vw,240px)] font-extrabold leading-[0.8] tracking-tight uppercase text-white"
        style={{ y }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        VI
      </motion.h1>
      <motion.p
        className="mt-3 font-mono text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Independent creative studio — Joburg / Cape Town — est. 2022
      </motion.p>
    </section>
  );
};

export default Hero;
