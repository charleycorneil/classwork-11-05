"use client";

import { useState } from "react";

export default function CatchButton({ pokemonName }) {
  const [caught, setCaught] = useState(false);

  return (
    <button
      onClick={() => setCaught((v) => !v)}
      className={`mt-2 rounded px-4 py-2 transition hover:opacity-90 ${
        caught ? "bg-green-600 text-white" : "bg-blue-600 text-white"
      }`}
      aria-pressed={caught}
    >
      {caught ? `🎉 ${pokemonName} caught!` : `Catch ${pokemonName}`}
    </button>
  );
}
