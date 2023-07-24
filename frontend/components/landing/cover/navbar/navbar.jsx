"use client";
import { Playfair_Display } from "@next/font/google";

const pfrDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

import classes from "./navbar.module.css";
import Image from "next/image";
import EmiliaBrewster from "../../../../public/EmiliaBrewster.svg";
import { Squash as Hamburger } from "hamburger-react";
import { FaShopify } from "react-icons/fa";
import { useState, useEffect } from "react";

//                               //
// // // // Main FUnction // // //
//                               //

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [hamburgerSize, setHamburgerSize] = useState(40);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newHamburgerSize = window.innerWidth < 600 ? 25 : 40;
      setHamburgerSize(newHamburgerSize);
      setIsLargeScreen(window.innerWidth > 600);
    };

    handleResize(); // Initial call to set the correct screen width and hamburger size on page load

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.navbar}>
      <div className={classes.ham}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          easing="ease-out"
          onToggle={() => {
            console.log("Was toggled");
          }}
          size={hamburgerSize}
          distance="lg"
        />
      </div>

      <Image src={EmiliaBrewster} alt={""} className={classes.emilia} />

      {isLargeScreen ? (
        <div className={classes.shop}>
          <h3 className={pfrDisplay.className}>SHOP</h3>
        </div>
      ) : (
        <FaShopify size={30} />
      )}
    </div>
  );
}
