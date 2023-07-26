"use client";

import { Roboto } from "@next/font/google";
const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
});

import classes from "./emilia.module.css";
import EmiliaSign from "../../../public/EmiliaSign.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Emilia() {
  return (
    <div className={classes.emilia}>
      <div className={classes.ingredients}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        ></motion.div>
        <div>
          <p className={roboto.className}>
            New updated line features all must-haves, everything is clean, vegan
            and cruelty free, with ingredients that are good for your lips. New
            formula has 8 hour wear and lasting color but is super comfortable
            on the lips.
          </p>
        </div>
      </div>

      <div className={classes.testimonials}>
        <div>
          <motion.div
            className={classes.lips3}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          ></motion.div>
          <p className={roboto.className}>
            “ I love that makeup can make you feel confident and beautiful and I
            want to share that feeling with you. So, I created perfect makeup
            products to give women good emotions for the whole day. ”
          </p>
          <Image src={EmiliaSign} alt="xyz" className={classes.sign} />
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        ></motion.div>
      </div>
    </div>
  );
}
