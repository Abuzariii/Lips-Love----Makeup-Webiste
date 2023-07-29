"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./category.module.css";
import { fetchByCategory } from "../utils/fetchFunctions";

export default function Category() {
  const [items, setItems] = useState(null);
  const category = convertPath();

  useEffect(() => {
    fetchByCategory(setItems, category);
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
