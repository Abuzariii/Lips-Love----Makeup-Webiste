import classes from "./Menu.module.css";
import { motion } from "framer-motion";
import { Squash } from "hamburger-react";
import { HiShoppingBag } from "react-icons/hi";

export default function Menu() {
  return (
    <div className={classes.menu}>
      <Squash />
      <div>
        <HiShoppingBag></HiShoppingBag>
        <p>Buy</p>
      </div>

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
