import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";

function MerchGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await supabase.from("products").select("*").order("created_at");
      setProducts(data || []);
    }
    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg hover:shadow-lg">
          <img src={item.image_url} alt={item.name} />
          <h4>{item.name}</h4>
          <p>R{item.price}</p>
          <button className="bg-pink-600 text-white px-3 py-1 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default MerchGrid;