import React from "react";
import { motion } from "framer-motion";

const Gate = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 grid place-items-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="text-center select-none"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={onEnter}
          className="font-mono border border-white px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
        >
          TAP / CLICK TO ENTER
        </button>
        <p className="mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} VON INTELLEKT — All media reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Gate;
