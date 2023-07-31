"use client";

import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <DataContext.Provider value={{ data, setData, isLoggedIn, setIsLoggedIn }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
