"use client";

import classes from "./place-order.module.css";
import { useState, useEffect, useContext } from "react";
import { sendRequestWithToken } from "../utils/fetchFunctions";
import { DataContext } from "@/Context/dataContext";

export default function PlaceOrder() {
  const { orders } = useContext(DataContext);
  const [count, setCount] = useState(0);

  let totalCount = 0;
  orders.orders.forEach((order) => {
    totalCount += parseInt(Math.floor(order.price));
  });
  useEffect(() => {
    setCount(totalCount);
  }, [orders.orders]);

  async function order() {
    if (orders.email !== "") {
      const response = await fetch("http://localhost:4000/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      });
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Cart is empty");
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        let user = await sendRequestWithToken();
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={classes.order}>
      <h1>Your grand total is {count}$ for x items, place order now</h1>
      <button onClick={order} className={classes.placeButton}>
        PLACE
      </button>
    </div>
  );
}
