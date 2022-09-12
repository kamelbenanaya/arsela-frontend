import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import Card from "../card/Card";

export const ProductList = ({
  productsList,
  setproductsList,
  data,
  isLoading,
  error,
  resetOnSubmit,
}) => {
  useEffect(() => {
    setproductsList(data);
  }, [data]);

  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {isLoading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
      {productsList?.length === 0 && (
        <div className="productNotFound">
          Product not found
          <br />
          <button className="submitbuttonfilter" onClick={resetOnSubmit}>
            {" "}
            reset
          </button>
        </div>
      )}
      {productsList &&
        productsList.map((product, index) => {
          // if (index < 4) {

          return (
            <div>
              <Card
                productId={product._id}
                key={index}
                productName={product.name}
                productImage={`${process.env.REACT_APP_BACKEND_URL}/${product.image[0]?.destination}/${product.image[0]?.filename}`}
                productDesc={product.description}
                productPrice={product.price}
                Promotion={product.pricePromotion.promotion}
                priceAfterPromo={product.pricePromotion.priceAfterPromo}
                productBrand={product?.brand?.name}
              />
            </div>
          );
          // }
        })}
    </>
  );
};
