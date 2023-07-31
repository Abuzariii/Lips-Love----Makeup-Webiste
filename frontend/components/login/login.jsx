"use client";

import jwt from "jsonwebtoken";
import Link from "next/link";
import { useEffect, useRef, useState, useContext } from "react";
import { DataContext } from "@/Context/dataContext";

export default function Login() {
  const [message, setMessage] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [decodedToken, setDecodedToken] = useState(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);

  function decodeJWT() {
    const token = localStorage.getItem("jwt-token");
    try {
      const decoded = jwt.decode(token);
      setDecodedToken(decoded);
      if (decoded !== null) {
        setIsLoggedIn(true);
      }
      return decoded;
    } catch (error) {
      console.error("Error decoding JWT:", error);
      return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await response.json();
      if (data.JWT) {
        localStorage.setItem("jwt-token", data.JWT);
        setMessage("JWT Token received and stored in local storage");
        decodeJWT();
      } else if (data.message) {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    decodeJWT();
  }, []);
  console.log(isLoggedIn);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "300px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          ref={emailRef}
          style={{ width: "100%", padding: "5px" }}
          required
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label>
        <input
          type="password"
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
      <br />
      <br />
      <br />
      <Link href={"/"} className="link">
        <button
          style={{
            padding: "8px 15px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Home
        </button>
      </Link>
      <h1>{message}</h1>
      <h1>{decodedToken ? "Logged In " : "Not logged In"}</h1>
      {decodedToken && (
        <div>
          <p>Username: {decodedToken.username}</p>
          <p>Email: {decodedToken.email}</p>
        </div>
      )}
    </form>
  );
}
