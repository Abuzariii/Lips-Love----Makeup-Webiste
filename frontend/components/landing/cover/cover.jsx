"use client";

import { DataContext } from "@/Context/dataContext";
import jwt from "jsonwebtoken";
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

  const { isLoggedIn, setIsLoggedIn } = useContext(DataContext);

  useEffect(() => {
    const token = getToken();
    const decoded = jwt.decode(token);
    console.log(decoded);
    if (decoded !== null) {
      setIsLoggedIn(true);
    }
  }, []);
  console.log(isLoggedIn);
  return (
    <div className={classes.cover}>
      <Navbar isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      <Menu isMenuOpen={isMenuOpen} />
      <Banner />
      <BottomBanner />
    </div>
  );
}
