"use client";

import classes from "./cover.module.css";
import Navbar from "./navbar/navbar";
import Menu from "./menu/menu";
import Banner from "./banner/banner";
import { useState } from "react";

export default function Cover() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={classes.cover}>
      <Navbar isMenuOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      <Menu isMenuOpen={isMenuOpen} />
      <Banner />
    </div>
  );
}
