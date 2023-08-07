"use client";

import { DataContext } from "@/Context/dataContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TbPlayerTrackNext } from "react-icons/tb";
import { cinzel, roboto300, roboto400 } from "../utils/fonts";
import classes from "./cart.module.css";

export default function Cart() {
  const { orders, setOrders } = useContext(DataContext);

  const [count, setCount] = useState(0);
  let totalCount = 0;
  orders.orders.forEach((order) => {
    totalCount += parseInt(Math.floor(order.price));
  });
  useEffect(() => {
    setCount(totalCount);
  }, [orders.orders]);

  return (
    <div className={classes.cart}>
      <h1 className={cinzel.className}>ALL YOUR ORDERS</h1>
      {orders.orders.map((order, index) => (
        <div key={index} className={classes.cartItem}>
          <h2 className={roboto400.className}>{order.name.toUpperCase()}</h2>
          <h2 className={roboto400.className}>{order.price}$</h2>
          <button
            className={roboto400.className}
            onClick={(e) => {
              e.preventDefault();
              const indexToRemove = orders.orders.findIndex(
                (item) => item.id === order.id
              );

              if (indexToRemove !== -1) {
                const updatedOrders = [...orders.orders];
                updatedOrders.splice(indexToRemove, 1);

                setOrders((prevOrders) => ({
                  email: prevOrders.email,
                  orders: updatedOrders,
                }));
              }
            }}
          >
            <IoMdRemoveCircleOutline size={20} />
            REMOVE THIS ITEM
          </button>
        </div>
      ))}
      <h1 className={roboto300.className}>
        Grand total adjusted for discount :{" "}
        <label className={cinzel.className}>{count}$</label>
      </h1>
      <button className={`${classes.placeOrder} ${roboto400.className}`}>
        <Link href={"/checkout"} className="link">
          CHECKOUT
          <TbPlayerTrackNext size={18} />
        </Link>
      </button>
    </div>
  );
}
