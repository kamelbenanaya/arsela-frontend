import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import Card from "../card/index";
import { useGlobalContext } from "../../context/GlobalContext";
import Cardvertical from "../card/Cardvertical";

const ProductListCart = () => {
  const {globalState} = useGlobalContext();

  return (
    <div>
      {globalState.cartProducts &&
        globalState.cartProducts.map((product, index) => {
          // if (index < 4) {

          return (
            <div>
              <Cardvertical
                productId={product?.productId}
                key={index}
                productName={product?.productName}
                productImage={product?.productImage}
                productDesc={product?.productDesc}
                productPrice={product?.productPrice.toFixed(0)}
                Promotion={product?.Promotion}
                priceAfterPromo={product?.priceAfterPromo.toFixed(0)}
                productBrand={product?.productBrand}
                quantity={product?.quantity}
                intialprice={product?.productPrice}
                intialpricePromo={product?.priceAfterPromo}
              />
            </div>
          );
          // }
        })}
    </div>
  );
};
export default ProductListCart;
