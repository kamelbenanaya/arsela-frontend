import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "../../context/GlobalContext";
import { incrementCount } from "../../context/helpers";

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
  MinsAndPlus,
  PlusButton,
  RemoveButton,
  RemoveContainer,
  QuantityInCard,
  PriceContainer,
  ContainerPricePromotion,
  ContainerPriceAfterPromotion,
  PriceAfterPromotion,
  PricePromotion,
  PricePromotionTnd,
  PriceAfterPromotionPrice,
  PriceAfterPromotionPriceTnd,
  ContainerPricePromotionLine,
  ContainerButtons,
  ImageContainer,
  PromotionText,
} from "./styles";
import { msi } from "../../images/msi.png";
const Index = ({
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
    <Card>
      <CardLeft>
        {Promotion > 0 && (
          <ContainerPromotion>
            <PromotionText>Promotion - %{Promotion}</PromotionText>
          </ContainerPromotion>
        )}
        <ImageContainer>
          <Productimg src={productImage} />
        </ImageContainer>
      </CardLeft>
      <CardCenter>
        <BrandWrapper>
          <StockWrapper>in stock</StockWrapper>
          <ProductBrand>{productBrand}</ProductBrand>
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
      <CardRight>
        <ContainerButtons>
          <RemoveContainer>
            <RemoveButton onClick={deleteProductInCartOnClick}>
              Remove
            </RemoveButton>
          </RemoveContainer>
          <MinsAndPlus>
            <PlusButton onClick={decrementCountonClick}>-</PlusButton>
            <QuantityInCard>{quantity}</QuantityInCard>
            <PlusButton onClick={incrementCountOnClick}>+</PlusButton>
          </MinsAndPlus>
        </ContainerButtons>
        <PriceContainer>
          {productPrice != priceAfterPromo && (
            <>
              <ContainerPricePromotion>
                <PricePromotion>{productPrice}</PricePromotion>
                <PricePromotionTnd>TND</PricePromotionTnd>
              </ContainerPricePromotion>
              <ContainerPricePromotionLine />
            </>
          )}

          <ContainerPriceAfterPromotion>
            <PriceAfterPromotion>
              <PriceAfterPromotionPrice>
                {priceAfterPromo}
              </PriceAfterPromotionPrice>
              <PriceAfterPromotionPriceTnd>TND</PriceAfterPromotionPriceTnd>
            </PriceAfterPromotion>
          </ContainerPriceAfterPromotion>
        </PriceContainer>
      </CardRight>
    </Card>
  );
};
// index.defaultProps = {
//   productName: "Moniteur 23,6 à résolution Full HD 1920 x 1080a",
//   productDesc: `   Dalle incurvée 1500R pour un meilleur confort Lorem Ipsum is simply
//     dummy text of the printing and typesetting industry. LoremIpsum has
//     been the industry's standard dummy text ever since the 1500s, when
//     an unknown printer took a galley of type and scrambled...`,
// };
export default Index;
