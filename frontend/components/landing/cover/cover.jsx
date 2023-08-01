"use client";

import { DataContext } from "@/Context/dataContext";
import jwt from "jsonwebtoken";
import { useContext, useEffect, useState } from "react";
import Banner from "./banner/banner";
import BottomBanner from "./bottom-banner/bottom-banner";
import classes from "./cover.module.css";
import Menu from "./menu/menu";
import Navbar from "./navbar/navbar";
import { getToken } from "@/components/utils/loginCheckFunctions";

export default function Cover() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {
    isLoggedIn,
    setIsLoggedIn,
    loggedInEmail,
    setLoggedInEmail,
    loggedInUsername,
    setLoggedInUsername,
  } = useContext(DataContext);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = getToken();
    const decoded = jwt.decode(token);
    if (decoded !== null) {
      setIsLoggedIn(true);
      setLoggedInEmail(decoded.email);
      setLoggedInUsername(decoded.username);
    }
  }, []);

  return (
    <div className={classes.cover}>
      <Navbar isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      <Menu isMenuOpen={isMenuOpen} />
      <Banner />
      <BottomBanner />
    </div>
  );
}
