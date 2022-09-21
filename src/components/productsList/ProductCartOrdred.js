import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import PlaceOrder from "../card/PlaceOrder/index";

const ProductListCart = () => {
  const { globalState } = useGlobalContext();

  return (
    <div>
      {globalState.cartProducts &&
        globalState.cartProducts.map((product, index) => {
          // if (index < 4) {
          {
            console.log("index ===>", index);
          }

          return (
            <div>
              <PlaceOrder
                productId={product?.productId}
                index={index}
                productName={product?.productName}
                productImage={product?.productImage}
                productDesc={product?.productDesc}
                productPrice={product?.productPrice.toFixed(0)}
                Promotion={product?.Promotion}
                priceAfterPromo={product?.priceAfterPromo.toFixed(0)}
                productBrand={product?.productBrand}
                quantity={product?.quantity}
                intialprice={product?.productPrice.toFixed(0)}
                intialpricePromo={product?.priceAfterPromo.toFixed(0)}
              />
            </div>
          );
          // }
        })}
    </div>
  );
};
export default ProductListCart;
