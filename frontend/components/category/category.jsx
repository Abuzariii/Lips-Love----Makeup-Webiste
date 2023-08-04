"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import classes from "./category.module.css";
import { fetchByCategory } from "../utils/fetchFunctions";
import Link from "next/link";
import Title from "../Reusable/title";
import Nav from "../Reusable/nav";

export default function Category() {
  const [items, setItems] = useState(null);
  const category = convertPath();

  useEffect(() => {
    fetchByCategory(setItems, category);
  }, []);

  return (
    <div className={classes.container}>
      <Nav />
      <Title brand={category} />
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
