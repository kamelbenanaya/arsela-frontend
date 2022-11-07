import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import {
  Card,
  Container,
  Content,
  Footer,
  Left,
  NavBar,
  Right,
  Rightitem,
  CardLeft,
  CardCenter,
  CardRight,
  BrandWrapper,
  ProductinfoWrapper,
  RatingWrapper,
  ProductName,
  ContainerPromotion,
  Productimg,
  StockWrapper,
  ProductBrand,
  ProductDescription,
  StyledFontAwesomeIconstars,
} from "./styles";
import { msi } from "../../images/msi.png";
const index = ({
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
}) => {
  return (
    <Card>
      <CardLeft>
        <ContainerPromotion>
          <p>Promotion -20%</p>
        </ContainerPromotion>
        <Productimg src="https://www.wiki.tn/68943-thickbox_default/pc-portable-msi-gf63-thni-11sc-i7-11e-gen-8go-512go-gtx1650.jpg" />
      </CardLeft>
      <CardCenter>
        <BrandWrapper>
          <StockWrapper>in stock</StockWrapper>
          <ProductBrand>Optix MAG241C</ProductBrand>
        </BrandWrapper>
        <ProductinfoWrapper>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDesc}</ProductDescription>
        </ProductinfoWrapper>
        <RatingWrapper>
          <StyledFontAwesomeIconstars icon={faStar} className="star" />
          <StyledFontAwesomeIconstars icon={faStar} className="star" />
          <StyledFontAwesomeIconstars icon={faStar} className="star" />
          <StyledFontAwesomeIconstars icon={faStar} className="star" />
          <StyledFontAwesomeIconstars icon={faStar} className="star" />
        </RatingWrapper>
      </CardCenter>
      <CardRight />
    </Card>
  );
};
index.defaultProps = {
  productName: "Moniteur 23,6 à résolution Full HD 1920 x 1080",
  productDesc: `   Dalle incurvée 1500R pour un meilleur confort Lorem Ipsum is simply
    dummy text of the printing and typesetting industry. LoremIpsum has
    been the industry's standard dummy text ever since the 1500s, when
    an unknown printer took a galley of type and scrambled...`,
};
export default index;
