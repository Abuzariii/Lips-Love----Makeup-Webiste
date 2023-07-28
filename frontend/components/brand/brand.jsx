"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./brand.module.css";
import { fetchByBrand } from "../utils/fetchFunctions";

export default function Brand() {
  const [items, setItems] = useState(null);
  const brand = convertPath();

  useEffect(() => {
    fetchByBrand(setItems, brand);
  }, []);

  return (
    <div className={classes.item}>
      {items &&
        items.map((item) => (
          <div key={item._id}>
            <img src={item.image_link} alt="xyz" />
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
  dynamic_path = dynamic_path.split("_").join(" ");
  return dynamic_path;
}
