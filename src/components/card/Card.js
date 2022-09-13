import React, { useState, useContext, createContext, useEffect } from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// import Cardvertical from "./Cardvertical";

import { useGlobalContext } from "../../context/GlobalContext";
function Card({
  productName,
  productImage,
  productDesc,
  productPrice,
  productBrand,
  Promotion,
  priceAfterPromo,
  productId,
}) {
  console.log(
    "🚀 ~ file: Card.js ~ line 24 ~ useGlobalContext",
    useGlobalContext()
  );

  const [Cart, setCart] = useState([productId]);
  const { cartProducts, setCartProducts, cartTotalItems, setCartTotalItems } =
    useGlobalContext();
  const navigate = useNavigate();

  const addItem = () => {
    let item = {
      productName,
      productImage,
      productDesc,
      productPrice,
      productBrand,
      Promotion,
      priceAfterPromo,
      productId,
      quantity: 1,
      intialprice: productPrice,
      intialpricePromo: priceAfterPromo,
    };
    const IsProductInCart =
      cartProducts.filter((e) => e.productId === item.productId).length > 0;
    console.log(
      "🚀 ~ file: Card.js ~ line 45 ~ addItem ~ IsProductInCart",
      IsProductInCart
    );
    if (IsProductInCart) {
      let newCardProduct = [...cartProducts];
      var index = newCardProduct.findIndex((i) => i.productId === productId);
      const ProductPriceintial = newCardProduct[index].productPrice;
      // console.log("🚀 ~ file: Card.js ~ line 53 ~ addItem ~ ProductPriceintial", ProductPriceintial)
      const ProductPricePromo = newCardProduct[index].priceAfterPromo;

      item.quantity = newCardProduct[index].quantity + 1;
      console.log(
        "🚀 ~ file: Card.js ~ line 61 ~ addItem ~ newCardProduct[index].quantity",
        newCardProduct[index].quantity
      );

      newCardProduct[index].productPrice = ProductPriceintial * item.quantity;
      newCardProduct[index].priceAfterPromo = ProductPricePromo * item.quantity;
      console.log(
        "🚀 ~ file: Card.js ~ line 59 ~ addItem ~ newCardProduct[index].productPrice",
        newCardProduct[index].productPrice
      );
      item.productPrice = newCardProduct[index].productPrice;
      item.priceAfterPromo = newCardProduct[index].priceAfterPromo;
      newCardProduct[index] = item;
      setCartProducts(newCardProduct);
    } else {
      console.log("else");
      setCartProducts([...cartProducts, item]);
    }
  };

  useEffect(() => {
    console.log("console log test", cartTotalItems);
  }, [cartTotalItems]);

  return (
    <div className="card">
      <div className="firstRow">
        <div className="stock">in stock</div>
        <FontAwesomeIcon icon={faHeart} className="heart" />
      </div>
      <div className="promotionWrapper">
        {Promotion > 0 && (
          <div className="promotion">
            <p>Promotion -{Promotion}%</p>
          </div>
        )}
        {Promotion === 0 && (
          <div style={{ width: "100%", height: "36px" }}></div>
        )}
      </div>
      <div>
        <img className="msipc" src={productImage} alt="aaa"></img>
      </div>
      <div className="alldescription">
        <p className="titreproduct">{productBrand}</p>
        <p className="nomproduct"> {productName}</p>
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />{" "}
        </div>
        <p className="descproduct"> {productDesc}</p>
      </div>
      <div className="pricereview">
        {productPrice != priceAfterPromo && (
          <div className="price">
            <p className="prixunit">{productPrice}</p>
            <p className="tnd">TND</p>
          </div>
        )}

        <div className="review">
          <FontAwesomeIcon icon={faCommentAlt} className="facomment" />{" "}
          <a href="./" style={{ color: "#B4B4B4" }}>
            2 Reviews
          </a>
        </div>
      </div>
      <div className="priceaddtocart">
        <div className="pricetoadd">
          <p className="prixunitreal">{priceAfterPromo}</p>
          <p className="tndreal">TND</p>
        </div>
        <button
          className="addtocart"
          type="button"
          onClick={() => {
            addItem();
          }}
          // onClick={()=>{navigate("/cart");}}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
