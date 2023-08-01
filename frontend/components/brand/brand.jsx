"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import classes from "./brand.module.css";
import { fetchByBrand } from "../utils/fetchFunctions";
import Link from "next/link";
import { poiret } from "../utils/fonts";
import jwt from "jsonwebtoken";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { BiCartAdd } from "react-icons/bi";
import { DataContext } from "@/Context/dataContext";
import { getToken } from "../utils/loginCheckFunctions";

export default function Brand() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    loggedInEmail,
    setLoggedInEmail,
    setLoggedInUsername,
    orders,
    setOrders,
  } = useContext(DataContext);
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

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Link href={"/"} className="link">
          <h1 className={poiret.className}>LIPS LOVE</h1>
        </Link>
        <div>
          {isLoggedIn ? (
            <Link href={"/cart"} className="link">
              <RiShoppingCart2Fill size={40} />
              <h4 className={poiret.className}>{orders.orders.length}</h4>
            </Link>
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
            <div key={item._id}>
              <img
                src={item.image_link}
                alt="alt"
                onError={(e) => {
                  e.target.src = "/noImage.png";
                }}
              />
              <Link href={"/product/" + item._id} className="link">
                <h2>{item.name}</h2>
              </Link>
              <h3>
                {item.price + " " + (item.currency ? item.currency : "USD")}
              </h3>
              <section
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setOrders((prevOrders) => ({
                    email: loggedInEmail,
                    orders: [
                      ...prevOrders.orders,
                      {
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        timestamp: Date.now(),
                      },
                    ],
                  }));
                }}
              >
                <BiCartAdd size={30} />
                <label>Add to Cart</label>
              </section>
            </div>
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
