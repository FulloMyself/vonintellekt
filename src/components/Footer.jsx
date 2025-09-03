import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 text-gray-400 text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} VON INTELLEKT</div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#terms" className="hover:text-white transition">
            Terms
          </a>
          <a
            href="https://instagram.com/vonintellekt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            IG
          </a>
        </div>
      </div>
    </footer>
  );
}
