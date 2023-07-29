"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./brand.module.css";
import { fetchByBrand } from "../utils/fetchFunctions";
import Link from "next/link";

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
