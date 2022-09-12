import Slider from "../../components/silder/Slider";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cardvertical from "../../components/card/Cardvertical";
import React, { useEffect, useState, useContext, createContext } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import ProductListCart  from "../../components/productsList/ProductListCart";
export const Index = () => {
  const [cartProducts,setCartProducts]=useGlobalContext()
  console.log("🚀 ~ file: index.js ~ line 11 ~ Index ~ cartProducts", cartProducts)

  return (
    <div>
      <Header />
      <Slider />
      <p style={{ fontSize: "40px" }}>Bascket</p>
      <div style={{ color: "black", margin: "40px" }}>
        <ProductListCart/>
      </div>
      <Footer />
    </div>
  );
};
export default Index;
