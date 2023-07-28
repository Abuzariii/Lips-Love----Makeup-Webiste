"use client";

import { pfrDisplay } from "@/components/utils/fonts";
import classes from "./navbar.module.css";
import Image from "next/image";
import EmiliaBrewster from "../../../../public/EmiliaBrewster.svg";
import { Squash as Hamburger } from "hamburger-react";
import { FaShopify } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

//                               //
// // // // Main Function // // //
//                               //

export default function Navbar({ onMenuClick }) {
  const [isOpen, setOpen] = useState(false);
  const [hamburgerSize, setHamburgerSize] = useState(40);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newHamburgerSize = window.innerWidth < 600 ? 25 : 40;
      setHamburgerSize(newHamburgerSize);
      setIsLargeScreen(window.innerWidth > 900);
    };

    handleResize(); // Initial call to set the correct screen width and hamburger size on page load

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showShopify, setShowShopify] = useState(false);
  useEffect(() => {
    setShowShopify(false);
    const timeoutId = setTimeout(() => {
      setShowShopify(true);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={classes.navbar}>
      <motion.div
        className={classes.ham}
        onClick={onMenuClick}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          easing="ease-out"
          onToggle={() => {
            console.log("Was toggled");
          }}
          size={hamburgerSize}
          distance="lg"
          color={isOpen ? "white" : "black"}
        />
      </motion.div>

      <Image src={EmiliaBrewster} alt={"xyz"} className={classes.emilia} />

      {isLargeScreen ? (
        <Link href={"/shop"} className="shop-link">
          <motion.div
            className={classes.shop}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <h3 className={pfrDisplay.className}>SHOP</h3>
          </motion.div>
        </Link>
      ) : (
        <Link href={"/shop"} className="shop-link">
          <FaShopify
            size={30}
            className={`${classes.fade} ${showShopify ? classes.fadeIn : ""}`}
          />
        </Link>
      )}
    </div>
  );
}
