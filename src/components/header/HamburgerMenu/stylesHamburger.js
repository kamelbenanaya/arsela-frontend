import media from "styled-media-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Link } from "react-router-dom";

export const Wrapperhamburger = styled.div`
  display: block;
  width: 25px;
  height: 21px;
  color: #f26522;
  padding-right: 0px;
  padding-top: 0px;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    display: none;

`}
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 30px;
  color: #f26522;
  height: 30px;
  z-index: 10;
`;
export const StyledLink = styled(Link)``;
export const Styledli = styled.li`
  color: #000;
  position: relative;
`;
export const Styledul = styled.ul`
  box-shadow: 0px 1px 2px #ccc;
  background-color: white;
  position: absolute;
  width: 100%;
  z-index: 1;
  direction: rtl;
  width: 100vw;
  left: 0;
  list-style-type: none;
  text-align: center;
`;
export const Styledi = styled.i`
  top: 0;
  right: 164px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  position: absolute;
`;
export const StyledivPostion = styled.div`
  position: relative;
`;
// export const Stylearrow = styled.div`
//   transform: rotate(45deg);
//   -webkit-transform: rotate(45deg);
//   position: absolute;
//   top: 83px;
//   right: 164px;
// `;
