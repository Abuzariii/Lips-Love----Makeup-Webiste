"use client";

import { useContext } from "react";
import { DataContext } from "@/Context/dataContext";

export default function Fetch() {
  const { data, setData } = useContext(DataContext);

  const fetchArticles = () => {
    fetch("http://localhost:4000/get-items")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  };
  return (
    <div>
      <button onClick={fetchArticles}>Fetch Data</button>
      <div>{data && <h1>{data.length}</h1>}</div>
    </div>
  );
}
