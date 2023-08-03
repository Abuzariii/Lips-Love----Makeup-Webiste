"use client";

import { cinzel, roboto300 } from "@/components/utils/fonts";
import classes from "./reveal.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <p className={roboto300.className}>
          Emilia provides high-quality, natural skincare solutions that promote
          the health of your skin and make you look and feel your best. With
          Emily, we want to make you feel confident and comfortable in your own
          skin.
        </p>
        <button className={roboto300.className}>
          <Link href={"/about"} className="link">
            ABOUT US
          </Link>
        </button>
      </div>
    </div>
  );
}
