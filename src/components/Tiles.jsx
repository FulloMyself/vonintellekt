import React from "react";
import { motion } from "framer-motion";

const tiles = [
  { id: "artists", title: "Artists", desc: "Roster, collaborators, and the people we build with.", big: "01", link: "#artists-list", linkText: "View roster", span: "col-span-12 md:col-span-8" },
  { id: "projects", title: "Projects", desc: "Selected work across music, fashion, and digital.", big: "02", link: "#projects-list", linkText: "See work", span: "col-span-12 md:col-span-4" },
  { id: "shop", title: "Shop", desc: "Merch, posters, artifacts. Drops are irregular.", big: "03", link: "#shop-section", linkText: "Enter", span: "col-span-12 md:col-span-6" },
  { id: "contact", title: "Contact", desc: "Studio time, commissioning, partnerships.", big: "04", link: "mailto:hello@vonintellekt.xyz", linkText: "Email us", span: "col-span-12 md:col-span-6" },
];

const Tiles = () => (
  <section className="grid grid-cols-12 gap-6 max-w-6xl mx-auto px-6 py-24">
    {tiles.map((tile, i) => (
      <motion.article
        key={tile.id}
        id={tile.id}
        className={`${tile.span} relative border border-white/10 rounded-3xl p-6 cursor-pointer`}
        whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.25)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
      >
        <h3 className="text-[clamp(22px,2.6vw,32px)] mb-2">{tile.title}</h3>
        <p className="text-gray-400">{tile.desc}</p>
        <div className="absolute bottom-2 left-3 font-mono text-[clamp(60px,14vw,160px)] text-white opacity-10 pointer-events-none">
          {tile.big}
        </div>
        <a href={tile.link} className="inline-flex items-center gap-2 mt-4 font-semibold hover:translate-x-1 transition-transform">
          {tile.linkText} <span>→</span>
        </a>
      </motion.article>
    ))}
  </section>
);

export default Tiles;
