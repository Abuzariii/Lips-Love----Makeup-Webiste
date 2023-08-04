"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import classes from "./brand.module.css";
import { fetchByBrand } from "../utils/fetchFunctions";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import { DataContext } from "@/Context/dataContext";
import { roboto400, cinzel } from "../utils/fonts";
import Nav from "../Reusable/nav";
import Title from "../Reusable/title";

export default function Brand() {
  const { isLoggedIn, loggedInEmail, orders, setOrders } =
    useContext(DataContext);
  const [items, setItems] = useState(null);
  const brand = convertPath();

  useEffect(() => {
    fetchByBrand(setItems, brand);
  }, []);

  useEffect(() => {
    console.log(orders);
    console.log(brand);
  }, [orders]);

  return (
    <div className={classes.container}>
      <Nav />
      <Title brand={brand} />
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
                <h2 className={cinzel.className}>
                  {item.name.length > 50
                    ? `${item.name.slice(0, 50)}...`
                    : item.name}
                </h2>
              </Link>
              <h3 className={roboto400.className}>
                {item.price + " " + (item.currency ? item.currency : "USD")}
              </h3>
              {isLoggedIn ? (
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
                  <label className={roboto400.className}>
                    ADD TO CART <BiCartAdd size={20} />
                  </label>
                </section>
              ) : (
                <label className={roboto400.className}>
                  <Link
                    href={"/login"}
                    className="link"
                    style={{ color: "black" }}
                  >
                    LOGIN TO ADD TO CART
                  </Link>
                </label>
              )}
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
