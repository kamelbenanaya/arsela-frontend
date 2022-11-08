import media from "styled-media-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFontAwesomeIconstars = styled(FontAwesomeIcon)`
  width: 17px;
  height: 16px;
  color: #f26522;
`;

export const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  height: fit-content;
  min-height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;
export const NavBar = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 100px;
`;
export const Footer = styled.div`
  /* background-color: green; */
  width: 100%;
  height: 100px;
`;
export const Content = styled.div`
  /* background-color: gray; */
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
flex-direction:row; 
 

`}
`;
export const Left = styled.div`
  /* background-color: violet; */
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
`;
export const Card = styled.div`
  /* background-color: cadetblue; */

  padding-top: 10px;
  display: flex;
  width: 90%;
  /* max-width: 300px; */
  height: 600px;
  margin: 10px;
  min-width: 270px;
  max-width: 450px;
  flex-direction: column;
  box-shadow: 0px 0px 10px 10px #0000001a;
  border-radius: 10px;
  ${media.between("medium", "large")`
    /* screen width is less than 768px (medium) */

    min-width: 400px;
    box-shadow: 0px 0px 10px 10px #0000001a;
    border-radius: 10px;

`}
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;

    height: 250px;
    max-width:1151px;
    box-shadow: 0px 0px 10px 10px #0000001a;
    border-radius: 10px;

`}
`;
export const CardLeft = styled.div`
  display: flex;
  /* background-color: brown; */
  /* width: 100%; */
  /* max-width: 300px; */
  height: 100%;
  position: relative;
  /* flex-grow: 1; */
`;
export const CardCenter = styled.div`
  display: flex;
  /* background-color: turquoise; */
  /* width: 100%; */
  height: 100%;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  /* flex-grow: 3; */
`;
export const BrandWrapper = styled.div`
  display: flex;
  /* background-color: rosybrown; */
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const ProductinfoWrapper = styled.div`
  display: flex;
  /* background-color: palegoldenrod; */
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const RatingWrapper = styled.div`
  display: flex;
  /* background-color: navajowhite; */
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const CardRight = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: tan; */
  /* width: 100%; */
  height: fit-content;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
    flex-direction: column;
    display: flex;
  flex-direction: column;
  /* background-color: tan; */
  /* width: 100%; */
  height: 100%;
  /* flex-grow: 1; */

`}
`;
export const Right = styled.div`
  display: flex;
  background-color: yellow;
  width: 100%;
  /* height: 100%; */
  min-height: 500px;
  max-height: 100%;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

max-width: 500px;

`}
`;
export const Rightitem = styled.div`
  display: flex;
  /* background-color: red; */
  width: 100px;
  height: 100px;
  min-height: 100%;
`;
export const ProductName = styled.h3`
  font-size: 15px;
  color: black;
`;
export const ProductDescription = styled.p`
  font-size: 12px;
  color: #b4b4b4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

    padding-right: inherit;

`}
`;

export const ContainerPromotion = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 36px;
  background-color: #f26522;
  align-items: center;
  justify-content: center;
  /* margin-top: 47px; */
  margin-top: 19px;
  color: #fff;
  position: absolute;
`;
export const Productimg = styled.img`
  width: 250px;
  height: 187px;
`;
export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StockWrapper = styled.div`
  /* padding-left: 23px; */
  padding-top: 13px;
  font-size: 15px;
  color: #3fd73f;
  display: flex;
`;

export const ProductBrand = styled.div`
  color: #f26522;
  font-size: 15px;
  margin: 0 0 10px 0;
  padding-top: 10px;
  color: black;
`;
export const MinsAndPlus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10px;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

    justify-content: right;

`}
`;
export const PromotionText = styled.p`
  font-size: 12px;
  font-family: "Poppins regular";

  ${media.between("medium", "large")`
    /* screen width is less than 768px (medium) */
    font-size: 12px;
  

`}
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
    font-size: 12px;
`}
`;

export const PlusButton = styled.button`
  width: 30px;
  height: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #f26522;
  border-color: #fff0;
  border-radius: 10px;
  font-size: 10px;
`;
export const RemoveContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10px;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

    justify-content: right;

`}
`;
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

    margin-left: -16px;
`}
`;
export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  height: 20px;
  color: #f26522;
  background-color: #fff0;
  border-color: #fff0;
`;
export const QuantityInCard = styled.div`
  padding-right: 5px;
  padding-left: 5px;
  font-size: 15px;
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding-left: 23px;
  padding-right: 23px;
  position: relative;
  flex-direction: column;
`;

export const ContainerPricePromotion = styled.div`
  display: flex;
  align-items: baseline;
  height: 31px;
  position: relative;
`;
export const ContainerPricePromotionLine = styled.div`
  position: absolute;
  width: 70px;
  height: 57px;
  border-top: 1px solid #b4b4b4;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

    width: 68px;
  height: 70px;

`}
`;

export const PricePromotion = styled.p`
  color: #b4b4b4;
  font-size: 20px;
  line-height: 20px;
  margin-top: 16px;
  padding-top: 0;
`;
export const PricePromotionTnd = styled.p`
  color: #b4b4b4;
  font-size: 13px;
  line-height: 30px;
  padding-left: 5px;
  padding-top: 0px;
  margin-top: 0;
`;
export const ContainerPriceAfterPromotion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceAfterPromotion = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceAfterPromotionPrice = styled.p`
  color: #283337;
  font-size: 25px;
  padding-bottom: 10px;
  margin: 0;
  font-weight: 500;
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */

    padding-bottom: 23px;

`}
`;
export const PriceAfterPromotionPriceTnd = styled.p`
  color: #283337;
  font-size: 15px;
  padding-left: 5px;
`;
