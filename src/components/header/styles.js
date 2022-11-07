import media from "styled-media-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = styled.div`
  background-color: blue;
  width: 100%;
  height: 100px;
  display: flex;
`;
export const LogoMenu = styled.div`
  background-color: red;
  width: 50%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 30%;
`}
`;
export const LogoImg = styled.img`
  width: 180px;
  height: 42px;
`;
export const NavMenu = styled.div`
  background-color: yellow;
  width: 60%;
  height: 100px;
  display: none;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
display: block;
width: 50%;

`}
`;
export const IconMenu = styled.div`
  background-color: violet;
  width: 20%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
  flex-direction: row;
  width: 20%;
    

`}
`;
export const HamburgerMenuContainer = styled.div`
  background-color: black;
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
  display: none;
    

`}
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 21px;
  color: #f26522;
  padding: 5px;
  position: relative;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    padding-top: 23px;

`}
`;
export const Countshopcard = styled.p`
  position: absolute;
  top: -15px;
  right: -17px;

  border: 1px solid red;
  border-radius: 13px;
  width: 20px;
  color: white;
  background: red;
  text-align: center;
`;
export const ContainerCartShopping = styled.div`
  position: relative;
`;
