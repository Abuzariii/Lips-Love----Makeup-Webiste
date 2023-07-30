"use client";

import React, { useRef, useState } from "react";

export default function Signup() {
  const [message, setMessage] = useState("");
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      const data = await response.json();
      // Storing data in localStorage
      if (data.JWT) {
        localStorage.setItem("jwt-token", data.JWT);
        setMessage("JWT Token received and stored in local storage");
      } else if (data.message) {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          //   type="email"
          ref={emailRef}
          style={{ width: "100%", padding: "5px" }}
          required
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Username:</label>
        <input
          ref={usernameRef}
          style={{ width: "100%", padding: "5px" }}
          required
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label>
        <input
          //   type="password"
          ref={passwordRef}
          style={{ width: "100%", padding: "5px" }}
          required
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "8px 15px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Submit
      </button>
      <h1>{message}</h1>
    </form>
  );
}
