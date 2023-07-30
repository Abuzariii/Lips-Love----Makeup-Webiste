"use client";

import { DataContext } from "@/Context/dataContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { fetchItems } from "../utils/fetchFunctions";
import classes from "./browse.module.css";

export default function Browse() {
  const { data, setData } = useContext(DataContext);

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
      <div className={classes.browse}>
        {filteredData.slice(0, visibleItems).map((product) => (
          <Link
            href={"/product/" + product._id}
            className="link"
            key={product._id}
          >
            <div>
              <img
                src={product.image_link}
                alt="xyz"
                onError={(e) => handleImageError(e, product._id)}
              />
              <h2>{product.name}</h2>
              <h3>{product.brand}</h3>
              <h3>{product.price + " " + product.currency}</h3>
            </div>
          </Link>
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
