"use client";

import { DataContext } from "@/Context/dataContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import Left from "../ReusableComponents/left";
import { roboto500, roboto400, roboto300, fjallaOne } from "../utils/fonts";
import { decodeJWT } from "../utils/loginCheckFunctions";
import classes from "./login.module.css";
import { AiOutlineBackward } from "react-icons/ai";

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
        setMessage("Succesfully Logged In, Happy Shopping");
        emailRef.current.value = "";
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
      setMessage("Failed to login");
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
          <button type="submit" className={roboto500.className}>
            LOGIN
          </button>
          <h3 className={roboto300.className}>
            Not a user?{" "}
            <Link href={"/signup"} className="link">
              {" "}
              Signup{" "}
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
