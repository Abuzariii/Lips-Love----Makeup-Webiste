import classes from "./nav.module.css";
import { DataContext } from "@/Context/dataContext";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { poiret, pfrDisplay, italiana, caveat } from "../utils/fonts";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { TiHeart } from "react-icons/ti";
import { getToken } from "../utils/loginCheckFunctions";
import jwt from "jsonwebtoken";

export default function Nav() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    loggedInUsername,
    setLoggedInEmail,
    setLoggedInUsername,
    orders,
  } = useContext(DataContext);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", changeNavbarColor);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  useEffect(() => {
    const token = getToken();
    const decoded = jwt.decode(token);
    if (decoded !== null) {
      setIsLoggedIn(true);
      setLoggedInEmail(decoded.email);
      setLoggedInUsername(decoded.username);
    }
  }, []);

  return (
    <div
      className={classes.nav}
      style={{
        backgroundColor: hasScrolled ? "rgb(244, 199, 82)" : "transparent",
      }}
    >
      <Link href={"/"} className="link">
        <h1 className={poiret.className}>
          LIPS LOVE
          <TiHeart />
        </h1>
      </Link>

      <div className={classes.cartOrLogin}>
        {isLoggedIn ? (
          <Link href={"/cart"} className="link">
            <h2 className={caveat.className}>{loggedInUsername}</h2>
            <RiShoppingCart2Fill size={40} />
            <h4 className={poiret.className}>{orders.orders.length}</h4>
          </Link>
        ) : (
          <Link href={"/login"} className="link">
            <h1 className={pfrDisplay.className}>Login</h1>
          </Link>
        )}
      </div>
    </div>
  );
}
