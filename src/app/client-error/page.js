"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (Math.random() > 0.5) {
        setError(new Error("Client Component failed."));
      } else {
        setData("✅ Data fetched successfully (client)!");
      }
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl py-12">
        <h2 className="text-xl font-semibold">Loading client component…</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Simulating a network request…
        </p>
      </div>
    );
  }

  if (error) throw error;

  return (
    <div className="mx-auto max-w-2xl py-12">
      <h2 className="text-2xl font-semibold">Client Component Result</h2>
      <p className="mt-3">{data}</p>
      <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
        Tip: Refresh to randomly trigger the error boundary.
      </p>
    </div>
  );
}
