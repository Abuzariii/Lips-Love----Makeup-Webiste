"use client";

import { usePathname } from "next/navigation";
import classes from "./type.module.css";
import { fetchByProductType } from "../utils/fetchFunctions";
import Nav from "../ReusableComponents/nav";
import Title from "../ReusableComponents/title";
import ItemsLoader from "../ReusableComponents/itemsLoader";

export default function Type() {
  const product = convertPath();

  return (
    <div className={classes.container}>
      <Nav />
      <Title brand={product} />
      <ItemsLoader fetchFunc={fetchByProductType} fetchBy={product} />
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  return dynamic_path;
}
