"use client";

import { DataContext } from "@/Context/dataContext";
import { useContext, useEffect, useState } from "react";
import classes from "./place-order.module.css";
import { lato, roboto400 } from "../utils/fonts";
import Link from "next/link";

export default function PlaceOrder() {
  const { orders, setOrders, loggedInEmail } = useContext(DataContext);
  const [count, setCount] = useState(0);
  const [numItems, setNumItems] = useState(0);
  const [responseText, setResponseText] = useState("");
  const [prevOrders, setPrevorders] = useState(null);

  let totalCount = 0;
  orders.orders.forEach((order) => {
    totalCount += parseInt(Math.floor(order.price));
  });

  useEffect(() => {
    setCount(totalCount);
    setNumItems(orders.orders.length);
    getOrders();
  }, [orders.orders, order]);

  async function order() {
    try {
      const token = localStorage.getItem("jwt-token");
      const response = await fetch("http://localhost:4000/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(orders),
      });
      if (response.status === 200) {
        setResponseText("Order Placed Successfully!!!");
        setOrders({ email: "", orders: [] });
      }
      const data = await response.json();
      console.log(data);
      if (
        data.TokenExpiredError ||
        data.message === "Unauthorized: Token not provided"
      ) {
        setResponseText("Your session has expired, please login again");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setResponseText("Failed to place order, try again later");
    }
  }

  async function getOrders() {
    try {
      const token = localStorage.getItem("jwt-token");
      const response = await fetch("http://localhost:4000/get-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ email: loggedInEmail }),
      });

      const data = await response.json();
      setPrevorders(data.orders);
    } catch (error) {
      console.error("An error occurred:", error);
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

      <div>
        {prevOrders && (
          <h1 className={lato.className}>
            You have previuosly ordered these Items :
          </h1>
        )}
        {prevOrders &&
          prevOrders.reverse().map((order, index) => (
            <div key={index}>
              <h3 className={roboto400.className}>{order.name}</h3>
              <h3 className={roboto400.className}>{parseInt(order.price)}$</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
