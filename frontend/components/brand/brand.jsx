"use client";

import { usePathname } from "next/navigation";
import classes from "./brand.module.css";
import Nav from "../ReusableComponents/nav";
import Title from "../ReusableComponents/title";
import ItemsLoader from "../ReusableComponents/itemsLoader";
import { fetchByBrand } from "../utils/fetchFunctions";

export default function Brand() {
  const brand = convertPath();

  return (
    <div className={classes.container}>
      <Nav />
      <Title brand={brand} />
      <ItemsLoader fetchFunc={fetchByBrand} fetchBy={brand} />
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  dynamic_path = dynamic_path.split("_").join(" ");
  return dynamic_path;
}
