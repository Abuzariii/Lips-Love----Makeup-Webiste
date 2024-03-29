"use client";

import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState("");
  const [loggedInUsername, setLoggedInUsername] = useState("");
  const [orders, setOrders] = useState({ email: "", orders: [] });
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoggedIn,
        setIsLoggedIn,
        loggedInEmail,
        setLoggedInEmail,
        loggedInUsername,
        setLoggedInUsername,
        orders,
        setOrders,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
