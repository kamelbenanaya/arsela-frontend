import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

function Card({
  productName,
  productImage,
  productDesc,
  productPrice,
  productBrand,
  Promotion,
  priceAfterPromo,
}) {
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
        <button className="addtocart">Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
