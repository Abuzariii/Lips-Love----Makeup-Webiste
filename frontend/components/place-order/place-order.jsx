"use client";

import { DataContext } from "@/Context/dataContext";
import { useContext, useEffect, useState } from "react";
import classes from "./place-order.module.css";
import { lato } from "../utils/fonts";
import Link from "next/link";

export default function PlaceOrder() {
  const { orders } = useContext(DataContext);
  const [count, setCount] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [responseText, setResponseText] = useState("");

  let totalCount = 0;
  orders.orders.forEach((order) => {
    totalCount += parseInt(Math.floor(order.price));
  });
  useEffect(() => {
    setCount(totalCount);
    setNumItems(orders.orders.length);
  }, [orders.orders]);

  async function order() {
    try {
      const response = await fetch("http://localhost:4000/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      });
      if (response.status === 200) {
        setResponseText("Order Placed Successfully!!!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
      setResponseText("Failed to place order, try again later");
    }
  }

  return (
    <div className={classes.order}>
      <h1 className={lato.className}>
        Your grand total is {count}$ for {numItems} items
      </h1>
      {responseText !== "Order Placed Successfully!!!" && (
        <h1 className={lato.className}>
          {count === 0 ? "Go to Shop and Add items to cart" : "Place order now"}
        </h1>
      )}
      {responseText !== "" && (
        <h2 className={lato.className}>{responseText}</h2>
      )}
      {count !== 0 && responseText !== "Order Placed Successfully!!!" && (
        <button onClick={order} className={classes.placeButton}>
          Place Order
        </button>
      )}
      {count === 0 && (
        <button className={classes.placeButton}>
          <Link href={"/shop"} className="link">
            Back to Shop
          </Link>
        </button>
      )}
    </div>
  );
}
