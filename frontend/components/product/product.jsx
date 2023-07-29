"use client";

import { usePathname } from "next/navigation";
import classes from "./product.module.css";
import { useEffect, useState } from "react";
import { fetchOneProduct } from "../utils/fetchFunctions";

export default function Product() {
  const [item, setItem] = useState(null);

  const id = convertPath();

  useEffect(() => {
    fetchOneProduct(setItem, id);
  }, []);
  return (
    <div className={classes.container}>
      {item && (
        <div>
          <h1>{item.name}</h1>
        </div>
      )}
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  return dynamic_path;
}
