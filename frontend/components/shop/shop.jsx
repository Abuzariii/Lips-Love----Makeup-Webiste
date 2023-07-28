"use client";

import { poiret, cinzel, roboto300 } from "../utils/fonts";
import classes from "./shop.module.css";
import Footer from "../landing/footer/footer";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useEffect, useContext } from "react";
import { DataContext } from "@/Context/dataContext";

export default function Shop() {
  const { data, setData } = useContext(DataContext);

  const fetchArticles = () => {
    fetch("http://localhost:4000/get-items")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchArticles();
  }, []); // The empty array ensures that this effect only runs once

  return (
    <div className={classes.shop}>
      <div className={classes.nav}>
        <h1 className={poiret.className}>LIPS LOVE</h1>
        <div>
          <RiShoppingCart2Fill size={40} />
          <h4 className={poiret.className}>0</h4>
        </div>
      </div>
      <div className={classes.shopOurProducts}>
        <h1 className={cinzel.className}>SHOP</h1>
        <p className={roboto300.className}>Our Products</p>
      </div>
      <div>
        <div>{data && <h1>{data.length}</h1>}</div>
        <div>{!data && <h1>0</h1>}</div>
      </div>
      <Footer />
    </div>
  );
}
