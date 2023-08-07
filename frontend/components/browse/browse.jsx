"use client";

import { DataContext } from "@/Context/dataContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchFunctions";
import classes from "./browse.module.css";
import { BiCartAdd } from "react-icons/bi";
import Nav from "../ReusableComponents/nav";
import { cinzel, roboto400 } from "../utils/fonts";

export default function Browse() {
  const { data, setData, isLoggedIn, loggedInEmail, setOrders } =
    useContext(DataContext);

  useEffect(() => {
    fetchItems(setData);
  }, []);

  const itemsToShowInitially = 100;
  const loadMoreStep = 100;
  const [visibleItems, setVisibleItems] = useState(itemsToShowInitially);
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + loadMoreStep);
  };

  const [failedImageLinks, setFailedImageLinks] = useState([]);
  const handleImageError = (e, productId) => {
    // Set the productId of the failed image in the state
    setFailedImageLinks((prevFailedLinks) => [...prevFailedLinks, productId]);
    // Replace the broken image with a noImage.png (optional)
    e.target.src = "/noImage.png";
  };

  // Filter out items with failed image links
  // Ensure data is not null or undefined before filtering
  const filteredData =
    data?.filter((product) => !failedImageLinks.includes(product._id)) || [];

  return (
    <div className={classes.container}>
      <Nav />
      <div className={classes.item}>
        {filteredData.slice(0, visibleItems).map((product) => (
          <div key={product._id}>
            <img
              src={product.image_link}
              alt="xyz"
              onError={(e) => handleImageError(e, product._id)}
            />
            <Link href={"/product/" + product._id} className="link">
              <h2 className={cinzel.className}>
                {product.name.length > 50
                  ? `${product.name.slice(0, 50)}...`
                  : product.name}
              </h2>
            </Link>
            <h3 className={roboto400.className}>{product.price + " $"}</h3>
            <h3 className={roboto400.className}>
              {product.brand.toUpperCase()} {product.product_type.toUpperCase()}
            </h3>
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
                        id: product._id,
                        name: product.name,
                        price: product.price,
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
        ))}
      </div>
      {data && visibleItems < data.length && (
        <button onClick={handleLoadMore} className={classes.button}>
          Load More
        </button>
      )}
    </div>
  );
}
