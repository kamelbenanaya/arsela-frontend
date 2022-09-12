import React, { useState, useContext, useEffect } from "react";

import "./cardVertical.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import msi from "../../images/msi.png";
import { useGlobalContext } from "../../context/GlobalContext";

function Cardvertical({
  productId,
  productName,
  productImage,
  productDesc,
  productPrice,
  productBrand,
  Promotion,
  priceAfterPromo,
  count,
}) {
  console.log("🚀 ~ file: Cardvertical.js ~ line 23 ~ productId", productId);
  const [cartProducts, setCartProducts] = useGlobalContext();

  // let [count,setCount]=useState(0)
  function incrementCount() {
    // setCount((count) => count + 1);
    let newProductList = [...cartProducts];

    var index = newProductList.findIndex((i) => i.productId === productId);

    newProductList[index].quantity = count + 1;

    setCartProducts(newProductList);
  }
  useEffect(() => {
    console.log(
      "🚀 ~ file: Cardvertical.js ~ line 37 ~ incrementCount ~ setCartProducts",
      cartProducts
    );
  }, [cartProducts]);
  function decrementCount() {
    let newProductList = [...cartProducts];

    var index = newProductList.findIndex((i) => i.productId === productId);

    newProductList[index].quantity = count - 1;
    if (newProductList[index].quantity === 0) {
      return setCartProducts(
        cartProducts.filter(
          (r) => r.productId !== newProductList[index].productId
        )
      );
    }
    setCartProducts(newProductList);
  }

  // useEffect(() => {
  //   console.log(
  //     "🚀 ~ file: Cardvertical.js ~ line 30 ~ incrementCount ~ currentProductList",
  //     currentProductList
  //   );
  // }, [cartProducts]);

  // console.log("count", setCount);
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
          <button onClick={incrementCount}>+</button>
          <div>{count}</div>
          <button onClick={decrementCount} disabled={count === 0}>
            -
          </button>
        </div>
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
