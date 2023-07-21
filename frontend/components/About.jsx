"use client";

import { useContext } from "react";
import { DataContext } from "@/Context/dataContext";

export default function About() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h1>About</h1>
      <div>{data && <h1>{data.length}</h1>}</div>
    </div>
  );
}
