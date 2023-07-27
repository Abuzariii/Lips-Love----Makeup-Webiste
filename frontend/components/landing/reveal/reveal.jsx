"use client";

import { Cinzel, Roboto } from "@next/font/google";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

import classes from "./reveal.module.css";
import { motion } from "framer-motion";

export default function Reveal() {
  return (
    <div className={classes.reveal}>
      <motion.div
        className={classes.faceDiv}
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0 }}
      ></motion.div>
      <div className={classes.about}>
        <h1 className={cinzel.className}>REVEAL YOUR BEAUTY</h1>
        <p className={roboto.className}>
          Emilia provides high-quality, natural skincare solutions that promote
          the health of your skin and make you look and feel your best. With
          Emily, we want to make you feel confident and comfortable in your own
          skin.
        </p>
        <button className={roboto.className}>ABOUT US</button>
      </div>
    </div>
  );
}
