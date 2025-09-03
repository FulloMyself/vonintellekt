import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    className="border-t border-white/10 text-gray-400 px-6 py-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4">
      <div>© {new Date().getFullYear()} VON INTELLEKT</div>
      <div className="flex gap-4">
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
