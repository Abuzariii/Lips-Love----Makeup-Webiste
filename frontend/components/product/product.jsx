"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./product.module.css";
import { fetchByProductType } from "../utils/fetchFunctions";

export default function Product() {
  const [items, setItems] = useState(null);
  const product = convertPath();

  useEffect(() => {
    fetchByProductType(setItems, product);
  }, []);

  return (
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
            <h2>{item.name}</h2>
            <h3>{item.price + " " + item.currency}</h3>
          </div>
        ))}
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  return dynamic_path;
}
