import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-6 py-6 gap-4 text-sm">
        <div>© {year} VON INTELLEKT</div>
        <div className="flex gap-4">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            IG
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
