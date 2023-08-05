"use client";

import { DataContext } from "@/Context/dataContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { decodeJWT } from "../utils/loginCheckFunctions";
import classes from "./login.module.css";
import { poiret, roboto400, roboto300 } from "../utils/fonts";
import Left from "../ReusableComponents/left";

export default function Login() {
  const [message, setMessage] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [decodedToken, setDecodedToken] = useState(null);
  const { setIsLoggedIn, setLoggedInEmail, setLoggedInUsername } =
    useContext(DataContext);

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
      <form onSubmit={handleSubmit} className={classes.right}>
        <div className={classes.formDiv}>
          <p className={roboto400.className}>Email:</p>
          <input
            type="email"
            placeholder="you@email.com"
            ref={emailRef}
            required
          />

          <p className={roboto400.className}>Password:</p>
          <input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <button type="submit">Submit</button>
          <br />
          <Link href={"/"} className="link">
            <button>Home</button>
          </Link>
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
