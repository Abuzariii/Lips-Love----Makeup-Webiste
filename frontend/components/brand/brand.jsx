"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import classes from "./brand.module.css";
import { fetchByBrand } from "../utils/fetchFunctions";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import { DataContext } from "@/Context/dataContext";
import Nav from "../Reusable/nav";

export default function Brand() {
  const { loggedInEmail, orders, setOrders } = useContext(DataContext);
  const [items, setItems] = useState(null);
  const brand = convertPath();

  useEffect(() => {
    fetchByBrand(setItems, brand);
  }, []);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  return (
    <div className={classes.container}>
      <Nav />
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
