"use client";

import React, { useState, useRef, useEffect } from "react";
import classes from "./checkout.module.css";
import { sendRequestWithToken } from "../utils/fetchFunctions";
import { getToken } from "../utils/loginCheckFunctions";
import Link from "next/link";

export default function Checkout() {
  const fullNameRef = useRef();
  const contactNoRef = useRef();
  const addressRef = useRef();
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [isUser, setIsUser] = useState(false);

  const updateDetails = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt-token");
    const fullName = fullNameRef.current.value;
    const contactNo = contactNoRef.current.value;
    const address = addressRef.current.value;

    if (token) {
      const response = await fetch(
        "http://localhost:4000/user-details/update",
        {
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
        }
      );
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Token not available in local storage");
      return "Failed";
    }
  };
  const uploadDetails = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt-token");
    const fullName = fullNameRef.current.value;
    const contactNo = contactNoRef.current.value;
    const address = addressRef.current.value;
    if (token) {
      const response = await fetch(
        "http://localhost:4000/user-details/upload",
        {
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
        }
      );
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Token not available in local storage, please login");
      return "Failed";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let user = await sendRequestWithToken();
        console.log(user);
        if (user.fullName !== undefined) {
          setFullName(user.fullName);
          setAddress(user.address);
          setContact(user.contactNo);
          setIsUser(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    getToken();
  }, []);

  return (
    <div className={classes.checkout}>
      <h1>Checkout</h1>
      <form onSubmit={updateDetails}>
        <div className={classes.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" ref={fullNameRef} required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="contactNo">Contact No:</label>
          <input type="text" id="contactNo" ref={contactNoRef} required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="address">Address:</label>
          <textarea id="address" ref={addressRef} required />
        </div>
        {isUser && <button type="submit">Update Details</button>}
        {!isUser && <button onClick={uploadDetails}>Upload Details</button>}
      </form>
      {isUser && <h1>User already exists, You can update the details</h1>}
      {!isUser && (
        <h1>No details exist for this user, please upload details</h1>
      )}
      <h1>Full Name : {fullName}</h1>
      <h1>Address : {address}</h1>
      <h1>Contact : {contact}</h1>
      {isUser && (
        <Link href={"/place-order"} className="link">
          <button>Place Order</button>
        </Link>
      )}
    </div>
  );
}
