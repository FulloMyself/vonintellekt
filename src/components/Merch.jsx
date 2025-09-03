import React from "react";

const merchItems = [
  { id: 1, name: "VI Hoodie", price: 499, image: "https://via.placeholder.com/200x200" },
  { id: 2, name: "VI Cap", price: 249, image: "https://via.placeholder.com/200x200" },
  { id: 3, name: "VI Poster", price: 99, image: "https://via.placeholder.com/200x200" },
];

export default function Merch() {
  return (
    <section className="min-h-screen p-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Merchandise</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {merchItems.map((item) => (
          <div key={item.id} className="border border-white/10 p-4 rounded-lg hover:border-white/30 transition">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-400">R{item.price}</p>
            <button className="mt-2 px-4 py-1 border border-white/30 rounded hover:bg-white/10">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
