import React, { useEffect } from "react";
import "./placeOrder.css";
import msipc from "../../../images/msi.png";
import { useGlobalContext } from "../../../context/GlobalContext";

const PlaceOrder = ({
  productId,
  productName,
  productImage,
  productDesc,
  productPrice,
  productBrand,
  Promotion,
  priceAfterPromo,
  quantity,
  intialprice,
  intialpricePromo,
  index,
}) => {
  const { globalState } = useGlobalContext();
  useEffect(() => {
    console.log("🚀 ~ file: index.js ~ line 24 ~ index", index);
  }, [index]);
  let totalInitalPrice = 0;
  let totalPriceAfterDiscount = 0;
  const shippingPrice = 8.0;
  let totalFinal = 0;
  return (
    <div className="PlaceOrderContainerAll">
      <div className="PlaceOrderContainer">
        <div className="imageContainer">
          <p className="quantityImage">{quantity}</p>
          <img classeName="imagePlaceOrder" src={productImage} />
        </div>
        <div className="titleProductPlaceOrder">
          <div className="firstRowTitleProductPlaceOrder">
            <p className="nameProduct">{productName}</p>
            <p>{intialpricePromo}TND</p>
          </div>

          <p>{productBrand}</p>
        </div>
      </div>
      {index === globalState.cartProducts.length - 1 && (
        <>
          <div className="separteur" />
          <div className="subTotalContainer">
            <div className="SubtotalAll">
              <p>Price Before Discount</p>
              {globalState.cartProducts.map((product, index) => {
                totalInitalPrice = product.intialprice + totalInitalPrice;
                console.log(
                  "🚀 ~ file: index.js ~ line 50 ~ {globalState.cartProducts.map ~ totalInitalPrice",
                  totalInitalPrice
                );
              })}
              <p>{totalInitalPrice}TND</p>
            </div>
            <div className="SubtotalAll">
              <p>Price</p>
              {globalState.cartProducts.map((product, index) => {
                totalPriceAfterDiscount =
                  product.priceAfterPromo + totalPriceAfterDiscount;
              })}
              <p>{totalPriceAfterDiscount}TND</p>
            </div>
            <div className="SubtotalAll">
              <p>Shipping</p>
              <p>{shippingPrice} TND</p>
            </div>
          </div>
          <div className="separteur" />
          <div className="totalAllContainer">
            <div className="totalCont">
              <p>Total</p>
              <p>
                EUR{" "}
                <b>{(totalFinal = shippingPrice + totalPriceAfterDiscount)}$</b>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaceOrder;
