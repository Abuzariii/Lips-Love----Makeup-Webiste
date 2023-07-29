"use client";

import classes from "./browse.module.css";
import { DataContext } from "@/Context/dataContext";
import { useEffect, useContext } from "react";
import { fetchItems } from "../utils/fetchFunctions";
import Link from "next/link";

export default function Browse() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    fetchItems(setData);
  }, []);
  return (
    <div className={classes.browse}>
      {data &&
        data
          .slice()
          .reverse()
          .map((product) => (
            <Link
              href={"/product/" + product._id}
              className="link"
              key={product._id}
            >
              <div>
                <img src={product.image_link} alt="xyz" />
                <h2>{product.name}</h2>
                <h3>{product.brand}</h3>
                <h3>{product.price + " " + product.currency}</h3>
              </div>
            </Link>
          ))}
    </div>
  );
}
