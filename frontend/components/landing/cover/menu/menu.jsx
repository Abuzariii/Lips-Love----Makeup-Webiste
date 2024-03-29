import { lato } from "@/components/utils/fonts";
import classes from "./menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ isMenuOpen }) {
  const customEase = (t) => {
    return 1 - Math.pow(1 - t, 6);
  };

  // Variants for custom animations
  const itemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={classes.menu}
      initial={{ y: "100%" }}
      animate={{ y: isMenuOpen ? 0 : "100%" }}
      transition={{ duration: 1, ease: customEase }}
    >
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link href={"/"} className="link">
          HOME
        </Link>
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link href={"/about"} className="link">
          ABOUT
        </Link>
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link href={"/shop"} className="link">
          SHOP
        </Link>
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Link href={"/login"} className="link">
          LOGIN
        </Link>
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <Link href={"/contact"} className="link">
          CONTACT
        </Link>
      </motion.h1>
    </motion.div>
  );
}
