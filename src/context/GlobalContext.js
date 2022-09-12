import React, { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {

   const [globalState,setGlobalState]=useState();
  const [cartProducts, setCartProducts] = useState([]);
  const [cartTotalItems,setCartTotalItems] = useState(0)




  const contextValue = [cartProducts, setCartProducts,cartTotalItems,setCartTotalItems];

//   const [count, setCount] = useState(0);
//   const counter = [count, setCount];

  return (
    <GlobalContext.Provider value={(contextValue)}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
