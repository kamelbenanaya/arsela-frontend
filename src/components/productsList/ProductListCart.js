import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import Card from "../card/Card";
import { useGlobalContext } from "../../context/GlobalContext";
import Cardvertical from "../card/Cardvertical";

const ProductListCart = () => {
  const [cartProducts, setCartProducts] = useGlobalContext();
  console.log("tesssssssssssssssssstt", cartProducts);

  return (
    <div>
      {cartProducts &&
        cartProducts.map((product, index) => {
          // if (index < 4) {

          return (
            <div>
              <Cardvertical
                productId={product?.productId}
                key={index}
                productName={product?.productName}
                productImage={product?.productImage}
                productDesc={product?.productDesc}
                productPrice={product?.productPrice}
                Promotion={product?.Promotion}
                priceAfterPromo={product?.priceAfterPromo}
                productBrand={product?.productBrand}
                count={product?.quantity}
              />
            </div>
          );
          // }
        })}
    </div>
  );
};
export default ProductListCart;
