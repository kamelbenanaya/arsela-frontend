import media from "styled-media-query";
import styled from "styled-components";
import { BrowserRouter as BrowserRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterWrapper = styled.div`
  background-color: #0154ab;
  width: 100%;
  height: 100%;
  min-height: 276px;

  display: flex;

  flex-direction: column;
  align-items: center;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;
    height: 100px;
    min-height: 276px;
`}
`;
export const FooterLogo = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  height: 100%;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
  justify-content: center;
  max-width:300px;
  

`}
`;
export const Logo = styled.img`
  width: 200px;
  /* background-color: violet; */
`;
export const FooterListContainer = styled.div`
  width: 100%;
  /* background-color: brown; */
  /* justify-content: center;
  align-items: center; */
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    flex-direction: row;


`}
`;
export const FooterList = styled.div`
  width: 100%;
  /* background-color: yellow; */
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    padding-right:15px;
`}
`;
export const FooterMedia = styled.div`
  width: 100%;
  /* background-color: red; */
  justify-content: space-around;
  align-items: center;
  display: flex;

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: space-evenly;
    max-width: 300px;
    align-items:flex-start;
    
    height: 100%;
`}
`;
export const Listulf = styled.div`
  width: 100%;
  /* background-color: turquoise; */
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10px;
  color: white;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: left;
`}
`;
export const Listul = styled.div`
  width: 100%;
  /* background-color: turquoise; */
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10px;
  color: #d5d5d5;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: left;
`}
`;

export const Listulfs = styled.div`
  width: 100%;
  /* background-color: turquoise; */
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 10px;
  color: white;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    justify-content: center;
`}
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d5d5d5;
  font-size: 15px;
  &:hover {
    color: #f26522;
  }
`;
export const StyledFontAwesomeIconfa = styled(FontAwesomeIcon)`
  color: #fff;
  width: 11px;
  height: 20px;
`;
export const StyledFontAwesomeIconli = styled(FontAwesomeIcon)`
  color: #fff;
  width: 20px;
  height: 20px;
`;
export const StyledFontAwesomeIconyou = styled(FontAwesomeIcon)`
  color: #fff;
  width: 24px;
  height: 17px;
`;
export const MediaContent = styled.div`
  width: 100%;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    margin-top: 93px;
`}
`;
export const MediaContentforicons = styled.div`
  width: 100%;
  /* background-color: cyan; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    padding-bottom:0px;
`}
`;
