"use client";

import { DataContext } from "@/Context/dataContext";
import { useContext, useEffect, useState } from "react";
import Banner from "./banner/banner";
import BottomBanner from "./bottom-banner/bottom-banner";
import classes from "./cover.module.css";
import Menu from "./menu/menu";
import Navbar from "./navbar/navbar";

function getToken() {
  // Check if window and localStorage is defined before accessing localStorage.
  if (typeof window !== "undefined") {
    return localStorage.getItem("jwt-token");
  }
  return null;
}

export default function Cover() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const { setIsLoggedIn } = useContext(DataContext);
  useEffect(() => {
    // Check for the JWT token in local storage when the component mounts.
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);
  return (
    <div className={classes.cover}>
      {/* <h1>{isLoggedIn ? "Logged In" : "Not Logged In"}</h1> */}
      <Navbar isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      <Menu isMenuOpen={isMenuOpen} />
      <Banner />
      <BottomBanner />
    </div>
  );
}
