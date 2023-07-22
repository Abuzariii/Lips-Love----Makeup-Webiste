"use client";

export default function JWT() {
  function fetchJWT(e) {
    e.preventDefault();

    // Retrieving data from localStorage
    const valueFromLocalStorage = localStorage.getItem("jwt-token");
    console.log(valueFromLocalStorage);
  }
  return (
    <div>
      <button
        style={{
          padding: "8px 15px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
        onClick={fetchJWT}
      >
        Fetch JWT Token
      </button>
    </div>
  );
}
