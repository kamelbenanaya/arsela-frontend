import { cardActionAreaClasses } from "@mui/material";
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useReducer,
} from "react";
import {
  updateCartTotalItems,
  addItemToCart,
  incrementCount,
  decrementCount,
  removeitem,
} from "./helpers";

const GlobalContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "updateCartTotalItems":
      return {
        ...state,
        cartTotalItems: updateCartTotalItems(state.cartProducts),
      };
    case "addItemToCart":
      return {
        ...state,
        cartProducts: addItemToCart(action.item, state.cartProducts),
      };
    case "incrementCount":
      return {
        ...state,
        cartProducts: incrementCount(
          state.cartProducts,
          action.productId,
          action.intialprice,
          action.intialpricePromo
        ),
      };
    case "decrementCount":
      return {
        ...state,
        cartProducts: decrementCount(
          state.cartProducts,
          action.productId,
          action.intialprice,
          action.intialpricePromo
        ),
      };
    case "deleteProductInCart":
      // const index = state.cartProducts.findIndex(
      //   (i) => i.productId === action.productId
      // );

      return {
        ...state,

        cartProducts: removeitem(state.cartProducts, action.productId),
      };
    default:
      throw new Error();
  }
}
export function GlobalContextProvider({ children }) {
  const [globalState, globalDispatch] = useReducer(reducer, {
    cartProducts: [],
    cartTotalItems: 0,
  });
  useEffect(() => {
   globalState.cartProducts.map((e)=>{
    if (e.quantity === 0) {
      globalDispatch({
         type: "deleteProductInCart",productId :e.productId
       });
   }})
  }, [globalState]);

  //   const [cartProducts, setCartProducts] = useState([]);
  //   const [cartTotalItems, setCartTotalItems] = useState(0);

  useEffect(() => {
    globalDispatch({
      type: "updateCartTotalItems",
    });
  }, [globalState.cartProducts]);

  const contextValue = {
    globalState,
    globalDispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext = () => useContext(GlobalContext);
