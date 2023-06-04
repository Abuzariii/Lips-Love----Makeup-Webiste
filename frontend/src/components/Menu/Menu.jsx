import classes from "./Menu.module.sass";
import { motion } from "framer-motion";
import { Squash } from "hamburger-react";
import { HiShoppingBag } from "react-icons/hi";

export default function Menu() {
  return (
    <div className={classes.menu}>
      <Squash />
      <motion.div
        className={classes.shipping}
        animate={{
          rotate: -90,
        }}
      >
        <HiShoppingBag size={40} />
        <h4>Free Shipping</h4>
      </motion.div>

      <motion.p
        className={classes.halo}
        animate={{
          rotate: -90,
        }}
      >
        2021 Halo Lab © All rights reserved
      </motion.p>
    </div>
  );
}
