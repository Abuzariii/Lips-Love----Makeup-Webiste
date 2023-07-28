import { lato } from "@/components/utils/fonts";
import classes from "./menu.module.css";
import { motion } from "framer-motion";

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
        HOME
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        ABOUT
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        SHOP
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        BLOG
      </motion.h1>
      <motion.h1
        className={lato.className}
        variants={itemVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        CONTACT
      </motion.h1>
    </motion.div>
  );
}
