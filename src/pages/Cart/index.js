import Slider from "../../components/silder/Slider";
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React, { useEffect, useState, useContext, createContext } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import ProductListCart from "../../components/productsList/ProductListCart";
import PlaceOrder from "../../components/card/PlaceOrder/";
import ProductCartOrdred from "../../components/productsList/ProductCartOrdred";
import { CartPage } from "./styles";
export const Index = () => {
  const { globalState } = useGlobalContext();
  console.log(
    "🚀 ~ file: index.js ~ line 11 ~ Index ~ cartProducts",
    globalState
  );

  return (
    <CartPage>
      <Slider />
      <p style={{ fontSize: "40px" }}>Basket</p>
      <div
        className="cartPageContainer"
        style={{ color: "black", margin: "40px" }}
      >
        <ProductListCart />
        <ProductCartOrdred />
      </div>
    </CartPage>
  );
};
export default Index;
