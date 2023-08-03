"use client";

import {
  fetchBrands,
  fetchCategories,
  fetchProductTypes,
} from "../utils/fetchFunctions";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../landing/footer/footer";
import { italiana, roboto300, caveat } from "../utils/fonts";
import classes from "./shop.module.css";
import Nav from "../Reusable/nav";

export default function Shop() {
  const [brands, setBrands] = useState(null);
  const [categories, setCategories] = useState(null);
  const [productTypes, setProductTypes] = useState(null);

  useEffect(() => {
    fetchBrands(setBrands);
    fetchCategories(setCategories);
    fetchProductTypes(setProductTypes);
  }, []);

  return (
    <div className={classes.shop}>
      <Nav />
      <div className={classes.shopOurProducts}>
        <h1 className={italiana.className}>SHOP</h1>
        <p className={roboto300.className}>Our Products</p>
      </div>
      {/* Brands */}
      <div className={classes.Row}>
        <h1 className={italiana.className}>Check out our Brands</h1>
        <div>
          {brands &&
            brands.map((brand, index) => (
              <h1
                key={index}
                className={caveat.className}
                style={{ fontSize: "3rem" }}
              >
                <Link
                  className="link"
                  href={"/brands/" + brand.split(" ").join("_")}
                >
                  {brand.toUpperCase()}
                </Link>
              </h1>
            ))}
        </div>
      </div>
      {/* Product Types */}
      <div className={classes.Row}>
        <h1 className={italiana.className}>Our Products</h1>
        <div>
          {productTypes &&
            productTypes.map((product, index) => (
              <h1
                key={index}
                className={caveat.className}
                style={{ fontSize: "3rem" }}
              >
                <Link
                  className="link"
                  href={"/type/" + product.split(" ").join("_")}
                >
                  {product.toUpperCase()}
                </Link>
              </h1>
            ))}
        </div>
      </div>
      {/* Categories */}
      <div className={classes.Row}>
        <h1 className={italiana.className}>Shop by Categories</h1>
        <div>
          {categories &&
            categories.map((category, index) => {
              if (category) {
                return (
                  <h1
                    key={index}
                    className={caveat.className}
                    style={{ fontSize: "3rem" }}
                  >
                    <Link
                      className="link"
                      href={"/category/" + category.split(" ").join("_")}
                    >
                      {category.toUpperCase()}
                    </Link>
                  </h1>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
      <Link href={"/browse"} className="link">
        <button className={roboto300.className}>Browse all Products</button>
      </Link>
      <Footer />
    </div>
  );
}
