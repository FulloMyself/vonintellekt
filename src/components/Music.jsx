import React from "react";

const tracks = [
  { id: 1, title: "Smooth Flow", album: "Welkom Nights", duration: "3:45" },
  { id: 2, title: "Boom Bap Vibes", album: "Welkom Nights", duration: "4:12" },
  { id: 3, title: "Late Night Cypher", album: "Studio Sessions", duration: "2:58" },
];

export default function Music() {
  return (
    <section className="min-h-screen p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Music</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <div key={track.id} className="border border-white/10 p-4 rounded-lg hover:border-white/30 transition">
            <h3 className="font-semibold">{track.title}</h3>
            <p className="text-gray-400">{track.album}</p>
            <p className="text-gray-400 text-sm">{track.duration}</p>
            <button className="mt-2 px-4 py-1 border border-white/30 rounded hover:bg-white/10">
              Preview
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
