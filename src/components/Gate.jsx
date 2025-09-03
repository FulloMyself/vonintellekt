import React, { useState } from "react";

export default function Gate() {
  const [entered, setEntered] = useState(false);

  return !entered ? (
    <div className="fixed inset-0 grid place-items-center bg-black z-50">
      <div className="text-center">
        <button
          className="px-6 py-3 border border-white rounded-full font-mono"
          onClick={() => setEntered(true)}
        >
          TAP / CLICK TO ENTER
        </button>
      </div>
    </div>
  ) : null;
}