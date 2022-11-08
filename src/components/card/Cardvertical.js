import React, { useState, useContext, useEffect, useReducer } from "react";

import "./cardVertical.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "../../context/GlobalContext";
import { incrementCount } from "../../context/helpers";
function Cardvertical({
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
}) {

  const { globalState, globalDispatch } = useGlobalContext();
  const incrementCountOnClick = () => {
    globalDispatch({
      type: "incrementCount",
      productId,
      intialprice,
      intialpricePromo,
    });
  };
  const decrementCountonClick = () => {
    globalDispatch({
      type: "decrementCount",
      productId,
      intialprice,
      intialpricePromo,
    });
  };
  const deleteProductInCartOnClick = () => {
    globalDispatch({
      type: "deleteProductInCart",
      productId,
    });
  };

  return (
    <div className="cardVertical">
      <div className="firstRowVertical">
        <div>
          <div className="promotionWrapperVertical">
            {Promotion > 0 && (
              <div className="promotionVertical">
                <p>Promotion -{Promotion}%</p>
              </div>
            )}
            {Promotion === 0 && (
              <div style={{ width: "100%", height: "36px" }}></div>
            )}
          </div>
          <img className="msipcVertical" src={productImage} alt="aaa"></img>
        </div>
      </div>
      <div className="secondRowVertical">
        <div className="stockVertical">in stock</div>
        <div className="thirdRowvertical">
          <p className="titreproductVertical" style={{ color: "black" }}>
            {productBrand}
          </p>
          <div className="reviewVertical">
            <FontAwesomeIcon icon={faCommentAlt} className="facomment" />{" "}
            <a href="./" style={{ color: "#B4B4B4" }}>
              2 Reviews
            </a>
          </div>
        </div>
        <div className="alldescriptionVertical">
          <p className="nomproductVertical">{productName}</p>

          <p className="descproductVertical">{productDesc}</p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />{" "}
          </div>
        </div>
      </div>
      <div className="lastRowVertical">
        <div className="plusMinsRow">
          <button onClick={incrementCountOnClick}>+</button>
          <div>{quantity}</div>
          <button onClick={decrementCountonClick} disabled={quantity === 0}>
            -
          </button>
        </div>
        <button onClick={deleteProductInCartOnClick}>Remove</button>
        <div className="pricereviewVertical">
          {productPrice != priceAfterPromo && (
            <div className="priceVertical">
              <p className="prixunitVertical">{productPrice}</p>
              <p className="tndVertical">TND</p>
            </div>
          )}

          <div className="priceaddtocartVertical">
            <div className="pricetoaddVertical">
              <p className="prixunitrealVertical">{priceAfterPromo}</p>
              <p className="tndrealVertical">TND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardvertical;
