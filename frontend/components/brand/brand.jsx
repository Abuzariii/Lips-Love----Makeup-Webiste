"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import classes from "./brand.module.css";
import { fetchByBrand } from "../utils/fetchFunctions";
import Link from "next/link";
import { poiret } from "../utils/fonts";
import jwt from "jsonwebtoken";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { DataContext } from "@/Context/dataContext";
import { getToken } from "../utils/loginCheckFunctions";

export default function Brand() {
  const { isLoggedIn, setIsLoggedIn, setLoggedInEmail, setLoggedInUsername } =
    useContext(DataContext);
  const [items, setItems] = useState(null);
  const brand = convertPath();

  useEffect(() => {
    fetchByBrand(setItems, brand);
    const token = getToken();
    const decoded = jwt.decode(token);
    if (decoded !== null) {
      setIsLoggedIn(true);
      setLoggedInEmail(decoded.email);
      setLoggedInUsername(decoded.username);
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Link href={"/"} className="link">
          <h1 className={poiret.className}>LIPS LOVE</h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <RiShoppingCart2Fill size={40} />
          ) : (
            <Link href={"/login"} className="link">
              <h1 className={poiret.className}>Login/Signup</h1>
            </Link>
          )}
        </div>
      </div>
      <div className={classes.item}>
        {items &&
          items.map((item) => (
            <Link href={"/product/" + item._id} className="link" key={item._id}>
              <div>
                <img
                  src={item.image_link}
                  alt="alt"
                  onError={(e) => {
                    e.target.src = "/noImage.png";
                  }}
                />
                <h2>{item.name}</h2>
                <h3>{item.price + " " + item.currency}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  dynamic_path = dynamic_path.split("_").join(" ");
  return dynamic_path;
}

// Top Brands
// Nyx
// Cinique
