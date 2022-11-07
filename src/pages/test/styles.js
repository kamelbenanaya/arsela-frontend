import media from "styled-media-query";
import styled from "styled-components";


export const Container = styled.div`
  background-color: red;
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
 background-color: blue;
  width: 100%;
  height: 100px; 
`;
export const Footer = styled.div`
  background-color: green;
  width: 100%;
  height: 100px;
`;
export const Content = styled.div`
  background-color: gray;
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
  background-color: violet;
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
  background-color: cadetblue;
  display: flex;
  width: 90%;
  max-width: 300px;
  height: 600px;
  margin: 10px;
  min-width: 300px;
  flex-direction: column;
  ${media.between("medium", "large")`
    /* screen width is less than 768px (medium) */

    min-width: 400px;

`}
  ${media.greaterThan("large")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;

    height: 250px;
    max-width:1151px;

`}
`;
export const CardLeft = styled.div`
  display: flex;
  background-color: brown;
  width: 100%;
  height: 100%;
`;
export const CardCenter = styled.div`
  display: flex;
  background-color: turquoise;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
export const BrandWrapper = styled.div`
  display: flex;
  background-color: rosybrown;
  width: 100%;
  height: 100%;
`;
export const ProductinfoWrapper = styled.div`
  display: flex;
  background-color: palegoldenrod;
  width: 100%;
  height: 100%;
`;
export const RatingWrapper = styled.div`
  display: flex;
  background-color: navajowhite;
  width: 100%;
  height: 100%;
`;
export const CardRight = styled.div`
  display: flex;
  background-color: tan;
  width: 100%;
  height: 100%;
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
  background-color: red;
  width: 100px;
  height: 100px;
  min-height: 100%;
`;
export const ProductName = styled.h3`
font-size: 24px;
color: green;


`
