"use client";

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: "20px", color: "crimson" }}>
      <h2>Client Error Occured!!!</h2>
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          margin: "10px",
          padding: "10px 16px",
          backgroundColor: "crimson",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
