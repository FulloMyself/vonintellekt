import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user);
      }
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const jwt = (await supabase.auth.getSession()).data.session?.access_token;
      const res = await fetch("https://vonintellek-api-backend.onrender.com", {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      const data = await res.json();
      setUser(data.user);
      setPurchases(data.purchases);
      setLoading(false);
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (loading) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
        <p>Loading...</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Please log in</h2>
        <button
          className="px-6 py-2 border border-white rounded hover:bg-white/10"
          onClick={() => supabase.auth.signInWithOAuth({ provider: "github" })}
        >
          Sign in with GitHub
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-screen p-8 bg-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4">Profile</h2>
      <p>Welcome, {user.email}</p>
      <button
        className="mt-4 px-4 py-2 border border-white rounded hover:bg-white/10"
        onClick={() => supabase.auth.signOut()}
      >
        Log Out
      </button>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Your Purchases</h3>
        {purchases.length === 0 ? (
          <p className="text-gray-300">No purchases yet.</p>
        ) : (
          <ul className="list-disc pl-6 text-gray-300">
            {purchases.map((purchase) => (
              <li key={purchase.id}>
                {purchase.item_name} <span className="text-xs text-gray-400">({new Date(purchase.created_at).toLocaleString()})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
