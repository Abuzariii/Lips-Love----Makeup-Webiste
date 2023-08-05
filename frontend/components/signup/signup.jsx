"use client";

import { DataContext } from "@/Context/dataContext";
import { useContext, useEffect, useRef, useState } from "react";
import { decodeJWT } from "../utils/loginCheckFunctions";
import classes from "./signup.module.css";
import Left from "../ReusableComponents/left";

export default function Signup() {
  const [message, setMessage] = useState("");
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const [decodedToken, setDecodedToken] = useState(null);
  const { setIsLoggedIn, setLoggedInEmail, setLoggedInUsername } =
    useContext(DataContext);

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
      if (data.JWT) {
        localStorage.setItem("jwt-token", data.JWT);
        setMessage("JWT Token received and stored in local storage");
        decodeJWT(
          setDecodedToken,
          setIsLoggedIn,
          setLoggedInEmail,
          setLoggedInUsername
        );
      } else if (data.message) {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    decodeJWT(
      setDecodedToken,
      setIsLoggedIn,
      setLoggedInEmail,
      setLoggedInUsername
    );
  }, []);

  return (
    <div className={classes.container}>
      <Left />
      <form
        onSubmit={handleSubmit}
        style={{ margin: "0 auto" }}
        className={classes.right}
      >
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              //   type="email"
              ref={emailRef}
              style={{ padding: "5px" }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Username:</label>
            <input ref={usernameRef} style={{ padding: "5px" }} required />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Password:</label>
            <input
              //   type="password"
              ref={passwordRef}
              style={{ padding: "5px" }}
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
          <h1>{decodedToken ? "Logged In " : "Not logged In"}</h1>
          {decodedToken && (
            <div>
              <p>Username: {decodedToken.username}</p>
              <p>Email: {decodedToken.email}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
