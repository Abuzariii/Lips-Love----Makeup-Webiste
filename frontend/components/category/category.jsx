"use client";

import { usePathname } from "next/navigation";
import classes from "./category.module.css";
import { fetchByCategory } from "../utils/fetchFunctions";
import Title from "../ReusableComponents/title";
import Nav from "../ReusableComponents/nav";
import ItemsLoader from "../ReusableComponents/itemsLoader";

export default function Category() {
  const category = convertPath();

  return (
    <div className={classes.container}>
      <Nav />
      <Title brand={category} />
      <ItemsLoader fetchFunc={fetchByCategory} fetchBy={category} />
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  return dynamic_path;
}
