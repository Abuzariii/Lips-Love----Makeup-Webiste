"use client";

import { usePathname } from "next/navigation";
import classes from "./product.module.css";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "@/Context/dataContext";
import { fetchOneProduct } from "../utils/fetchFunctions";
import Nav from "../ReusableComponents/nav";
import { roboto400, cinzel, caveat } from "../utils/fonts";
import { BiCartAdd } from "react-icons/bi";
import Link from "next/link";
import Footer from "../landing/footer/footer";

export default function Product() {
  const [item, setItem] = useState("");
  const { isLoggedIn, loggedInEmail, setOrders } = useContext(DataContext);

  const id = convertPath();

  useEffect(() => {
    fetchOneProduct(setItem, id);
    console.log(item);
  }, []);

  // useEffect(() => {
  //   console.log(item);
  // }, [item]);

  return (
    <div className={classes.container}>
      <Nav />
      {item && (
        <div className={classes.item}>
          <div className={classes.imgDiv}>
            <img
              src={item.image_link}
              alt=""
              onError={(e) => {
                e.target.src = "/noImage.png";
              }}
            />
          </div>
          <div className={classes.descDiv}>
            <h1 className={cinzel.className}>{item.name}</h1>
            <p className={roboto400.className}>
              {item.description.length > 250
                ? `${item.description.slice(0, 250)}...`
                : item.description}
            </p>
            <h3 className={caveat.className}>
              <Link href={`/brands/${item.brand}`} className="link">
                {item.brand.toUpperCase()}
              </Link>
            </h3>
            <h4 className={roboto400.className}>{item.product_type}</h4>
            <h4 className={roboto400.className}>{item.category}</h4>
            <h1 className={cinzel.className}>
              $ {item.price}
              {" USD"}
            </h1>
            {isLoggedIn ? (
              <section
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  setOrders((prevOrders) => ({
                    email: loggedInEmail,
                    orders: [
                      ...prevOrders.orders,
                      {
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        timestamp: Date.now(),
                      },
                    ],
                  }));
                }}
              >
                <label className={roboto400.className}>
                  ADD TO CART <BiCartAdd size={20} />
                </label>
              </section>
            ) : (
              <label className={roboto400.className}>
                <Link
                  href={"/login"}
                  className="link"
                  style={{ color: "black" }}
                >
                  LOGIN TO ADD TO CART
                </Link>
              </label>
            )}
          </div>
        </div>
      )}
      {item && (
        <div className={classes.clr}>
          {item.product_colors.length !== 0 && (
            <h1 className={caveat.className}>Colors in this product</h1>
          )}
          {item.product_colors.length !== 0 && (
            <div>
              {item.product_colors.map((color, index) => (
                <div key={index}>
                  <div style={{ backgroundColor: `${color.hex_value}` }}></div>
                  <p className={roboto400.className}>{color.colour_name}</p>
                  <p className={roboto400.className}>{color.hex_value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export function convertPath() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  let dynamic_path = paths[paths.length - 1];
  return dynamic_path;
}
