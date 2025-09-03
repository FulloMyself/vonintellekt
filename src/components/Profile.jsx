import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user);
      }
    });

    // Optional: subscribe to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

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
        <h3 className="text-xl font-semibold mb-2">Your Purchases (mock)</h3>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Purchased Track 1</li>
          <li>Purchased Track 2</li>
        </ul>
      </div>
    </section>
  );
}
