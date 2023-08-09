"use client";

import { DataContext } from "@/Context/dataContext";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { sendRequestWithToken } from "../utils/fetchFunctions";
import { fjallaOne, italiana, roboto300, roboto400 } from "../utils/fonts";
import classes from "./checkout.module.css";

export default function Checkout() {
  const fullNameRef = useRef();
  const contactNoRef = useRef();
  const addressRef = useRef();
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [message, setMessage] = useState("");
  const { isLoggedIn } = useContext(DataContext);
  const [updateMessage, setUpdateMessage] = useState("");

  const updateDetails = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt-token");
    const fullName = fullNameRef.current.value;
    const contactNo = contactNoRef.current.value;
    const address = addressRef.current.value;

    if (token) {
      await fetch("http://localhost:4000/user-details/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          fullName,
          contactNo,
          address,
        }),
      });
      fullNameRef.current.value = "";
      contactNoRef.current.value = "";
      addressRef.current.value = "";
      setUpdateMessage("Details Updated Successfully");
    } else {
      setMessage("Failed to update details");
    }
  };
  const uploadDetails = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt-token");
    const fullName = fullNameRef.current.value;
    const contactNo = contactNoRef.current.value;
    const address = addressRef.current.value;
    if (token) {
      await fetch("http://localhost:4000/user-details/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          fullName,
          contactNo,
          address,
        }),
      });
      setMessage("Details Updated, place order now");
      fullNameRef.current.value = "";
      contactNoRef.current.value = "";
      addressRef.current.value = "";
      setUpdateMessage("Details Uploaded Successfully");
    } else {
      setMessage("Failed to update details");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let user = await sendRequestWithToken();
        if (user.TokenExpiredError) {
          setMessage("Your session has expired, please login again or signup");
        } else if (user.fullName !== undefined) {
          setFullName(user.fullName);
          setAddress(user.address);
          setContact(user.contactNo);
          setIsUser(true);
          setMessage("Current delivery details : ");
        } else if (user.message === "Failed to fetch") {
          setMessage("Failed to fetch details for this user");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [uploadDetails, updateDetails]);

  return (
    <div className={classes.container}>
      <div className={classes.checkout}>
        {isUser && (
          <form onSubmit={updateDetails}>
            <h1 className={italiana.className}>Checkout</h1>
            <label htmlFor="fullName" className={roboto300.className}>
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your name here..."
              ref={fullNameRef}
              required
            />
            <label htmlFor="contactNo" className={roboto300.className}>
              Contact No:
            </label>
            <input
              type="text"
              id="contactNo"
              placeholder="Contact number with country code"
              ref={contactNoRef}
              required
            />
            <label htmlFor="address" className={roboto300.className}>
              Address:
            </label>
            <textarea
              className={roboto400.className}
              id="address"
              placeholder="Complete address with postal code..."
              ref={addressRef}
              required
            />
            {isUser && <button type="submit">Update Details</button>}
            {!isUser && <button onClick={uploadDetails}>Upload Details</button>}
          </form>
        )}
        <h2 className={fjallaOne.className}>{updateMessage}</h2>
        <h2 className={roboto400.className}>{message}</h2>
        {isUser && (
          <>
            <h3 className={roboto400.className}>Full Name : {fullName}</h3>
            <h3 className={roboto400.className}>Contact : {contact}</h3>
            <h3 className={roboto400.className}>Address : {address}</h3>
            <Link href={"/place-order"} className="link">
              <button>Proceed to Place Order </button>
            </Link>
          </>
        )}
        {!isLoggedIn && !isUser && (
          <>
            <h2 className={roboto400.className}>
              You are not logged in, please login or signup
            </h2>
            <button>
              <Link href={"/login"} className="link">
                Login
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
