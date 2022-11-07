import React from "react";
import {
  FooterWrapper,
  FooterLogo,
  Logo,
  FooterList,
  FooterMedia,
  Listulf,
  Listul,
  StyledLink,FooterListContainer,StyledFontAwesomeIconfa,StyledFontAwesomeIconli,StyledFontAwesomeIconyou,MediaContent,MediaContentforicons,Listulfs
} from "./StyledFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import logoFooter from "../../../images/white.png";

const index = () => {
  return (
    <FooterWrapper>
    
      <FooterLogo>
        <Logo src={logoFooter} alt="aaa" />
      </FooterLogo>
      <FooterListContainer>
      <FooterList>
        <Listulf>Information</Listulf>
        <Listul>
          <StyledLink to="/">Stocks</StyledLink>
        </Listul>
        <Listul>
          <StyledLink to="/">Shops</StyledLink>
        </Listul>
        <Listul>
          <StyledLink to="/"> News</StyledLink>
        </Listul>
        </FooterList>
        <FooterList>
        <Listulf>Clients</Listulf>
        <Listul>
          <StyledLink to="/">Corporate sales</StyledLink>
        </Listul>
        <Listul>
          <StyledLink to="/">Delivery and payment</StyledLink>
        </Listul>
        <Listul>
          <StyledLink to="/">About company</StyledLink>
        </Listul>
      </FooterList>
      <FooterList>
        <Listulf>Additionally</Listulf>
        <Listul>
          <StyledLink to="/">Services Center</StyledLink>
        </Listul>
        <Listul>
          <StyledLink to="/">Terms of use of the site</StyledLink>
        </Listul>
      </FooterList>
</FooterListContainer>
      <FooterMedia>
        <MediaContent>
      <Listulfs>Social Media</Listulfs>
<MediaContentforicons>
      <StyledFontAwesomeIconfa icon={faFacebookF}/>
          <StyledFontAwesomeIconli
            icon={faLinkedinIn}
          />
          <StyledFontAwesomeIconyou icon={faYoutube} /></MediaContentforicons>
      </MediaContent>
      </FooterMedia>
    </FooterWrapper>
  );
};

export default index;
