"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import Footer from "../landing/footer/footer";
import {
  fetchBrands,
  fetchCategories,
  fetchProductTypes,
} from "../utils/fetchFunctions";
import { cinzel, poiret, roboto300 } from "../utils/fonts";
import classes from "./shop.module.css";

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
      <div className={classes.nav}>
        <Link href={"/"} className="link">
          <h1 className={poiret.className}>LIPS LOVE</h1>
        </Link>

        <div>
          <RiShoppingCart2Fill size={40} />
          <h4 className={poiret.className}>0</h4>
        </div>
      </div>
      <div className={classes.shopOurProducts}>
        <h1 className={cinzel.className}>SHOP</h1>
        <p className={roboto300.className}>Our Products</p>
      </div>
      {/* Brands */}
      <div className={classes.brands}>
        <h1>Check out our Brands</h1>
        <div>
          {brands &&
            brands.map((brand, index) => (
              <h1 key={index}>
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
      <div className={classes.brands}>
        <h1>Check All our Products</h1>
        <div>
          {productTypes &&
            productTypes.map((product, index) => (
              <h1 key={index}>
                <Link
                  className="link"
                  href={"/product/" + product.split(" ").join("_")}
                >
                  {product.toUpperCase()}
                </Link>
              </h1>
            ))}
        </div>
      </div>
      {/* Categories */}
      <div className={classes.brands}>
        <h1>Shop by Categories</h1>
        <div>
          {categories &&
            categories.map((category, index) => {
              if (category) {
                return (
                  <h1 key={index}>
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
        <button>Browse all Products</button>
      </Link>
      <Footer />
    </div>
  );
}
