"use client";

import { DataContext } from "@/Context/dataContext";
import { useContext, useEffect, useRef, useState } from "react";
import { roboto300, roboto400, roboto500, fjallaOne } from "../utils/fonts";
import { decodeJWT } from "../utils/loginCheckFunctions";
import classes from "./signup.module.css";
import Left from "../ReusableComponents/left";
import { AiOutlineBackward } from "react-icons/ai";
import Link from "next/link";

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
        setMessage("Succesfully Signed Up, Happy Shopping");
        emailRef.current.value = "";
        usernameRef.current.value = "";
        passwordRef.current.value = "";
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
      setMessage("Failed to signup");
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
          <p className={roboto400.className}>Username:</p>
          <input
            placeholder="type your username here ..."
            ref={usernameRef}
            required
          />
          <p className={roboto400.className}>Password:</p>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <button type="submit" className={roboto500.className}>
            SIGNUP
          </button>
          <h3 className={roboto300.className}>
            Already a user?{" "}
            <Link href={"/login"} className="link">
              {" "}
              Login{" "}
            </Link>{" "}
            instead
          </h3>
          <Link href={"/"} className="link">
            <button className={roboto400.className}>
              <AiOutlineBackward size={20} />
              Back to Home
            </button>
          </Link>
          <h2 className={fjallaOne.className}>{message}</h2>
          {decodedToken && (
            <label className={roboto400.className}>
              You are already logged in as {decodedToken.username} @{" "}
              {decodedToken.email}
            </label>
          )}
        </div>
      </form>
    </div>
  );
}
