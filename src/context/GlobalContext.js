import React, { useState, useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [globalState, setGlobalState] = useState();
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);

  useEffect(() => {
    if (cartProducts) {
      let totalItemInside = 0;
      console.log("everything", cartProducts);
      cartProducts.map((e, index) => {
        totalItemInside = e.quantity + totalItemInside;
      });
      console.log("test is here", totalItemInside);
      setCartTotalItems(totalItemInside);
    }
  }, [cartProducts]);
  useEffect(() => {
    console.log(
      "🚀 ~ file: GlobalContext.js ~ line 10 ~ GlobalContextProvider ~ cartTotalItems",
      cartTotalItems
    );
  }, [cartTotalItems]);

  const contextValue = {   
    cartProducts,
    setCartProducts,
    cartTotalItems,
    setCartTotalItems,
};

  //   const [count, setCount] = useState(0);
  //   const counter = [count, setCount];

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
