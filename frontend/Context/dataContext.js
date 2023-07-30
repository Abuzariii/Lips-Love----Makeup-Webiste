"use client";

import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add the isLoggedIn state here

  return (
    <DataContext.Provider value={{ data, setData, isLoggedIn, setIsLoggedIn }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
