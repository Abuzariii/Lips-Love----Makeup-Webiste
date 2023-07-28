import { poiret, roboto400 } from "@/components/utils/fonts";

import classes from "./banner.module.css";
import Rotate from "../../../../public/Rotate.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.lipslove}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        >
          <h1 className={poiret.className}>LIPS</h1>
          <h1 className={poiret.className}>LOVE</h1>
          <div className={classes.line}></div>
        </motion.div>
        <motion.p
          className={roboto400.className}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
        >
          Business in Pakistan is growing rapidly with a profit of 800 thousand
        </motion.p>
      </div>

      <motion.div
        className={classes.lips}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
      >
        <Image src={Rotate} alt={"xyz"} className={classes.rotate}></Image>
      </motion.div>
    </div>
  );
}
