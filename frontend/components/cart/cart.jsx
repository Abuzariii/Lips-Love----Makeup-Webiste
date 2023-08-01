"use client";

import classes from "./cart.module.css";
import { useContext } from "react";
import { DataContext } from "@/Context/dataContext";
import Link from "next/link";

export default function Cart() {
  const { orders } = useContext(DataContext);

  console.log(orders.orders);
  return (
    <div className={classes.cart}>
      <h1>Checkout your orders</h1>
      {orders.orders.map((order, index) => (
        <div key={index}>
          <h2>{order.name}</h2>
          <h2>{order.price}$</h2>
        </div>
      ))}
      <button className={classes["place-order-button"]}>
        <Link href={"/checkout"} className="link">
          Checkout
        </Link>
      </button>
    </div>
  );
}
