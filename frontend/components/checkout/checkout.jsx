"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import { DataContext } from "@/Context/dataContext";
import classes from "./checkout.module.css";
import { sendRequestWithToken } from "../utils/fetchFunctions";
import { getToken } from "../utils/loginCheckFunctions";

export default function Checkout() {
  const { loggedInEmail } = useContext(DataContext);
  const fullNameRef = useRef();
  const contactNoRef = useRef();
  const addressRef = useRef();
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [isUser, setIsUser] = useState(false);

  const updateDetails = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const contactNo = contactNoRef.current.value;
    const address = addressRef.current.value;
    console.log({
      email: loggedInEmail,
      FullName: fullName,
      ContactNo: contactNo,
      Address: address,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let user = await sendRequestWithToken();
        if (user) {
          setFullName(user.fullName);
          setAddress(user.address);
          setContact(user.contactNo);
          setIsUser(true);
        }
      } catch (error) {
        console.log("Error:", error.message);
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
        {!isUser && <button>Upload Details</button>}
      </form>
      {isUser && (
        <h1>User already exists, Update the details if you want to</h1>
      )}
      <h1>Full Name : {fullName}</h1>
      <h1>Address : {address}</h1>
      <h1>Contact : {contact}</h1>
    </div>
  );
}
