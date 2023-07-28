"use client";

import classes from "./browse.module.css";
import { DataContext } from "@/Context/dataContext";
import { useEffect, useContext } from "react";
import { fetchItems } from "../utils/fetchFunctions";

export default function Browse() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    fetchItems(setData);
  }, []);
  return (
    <div className={classes.browse}>
      <div>{data && <h1>All Items: {data.length}</h1>}</div>
      <div>{!data && <h1>All Items: 0</h1>}</div>
    </div>
  );
}
