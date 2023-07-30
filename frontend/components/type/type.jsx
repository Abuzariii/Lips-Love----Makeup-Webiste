"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./type.module.css";
import { fetchByProductType } from "../utils/fetchFunctions";
import Link from "next/link";
import { poiret } from "../utils/fonts";
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function Type() {
  const [items, setItems] = useState(null);
  const product = convertPath();

  useEffect(() => {
    fetchByProductType(setItems, product);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <Link href={"/"} className="link">
          <h1 className={poiret.className}>LIPS LOVE</h1>
        </Link>

        <div>
          <RiShoppingCart2Fill size={40} />
          <h4 className={poiret.className}>0</h4>
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
  return dynamic_path;
}
