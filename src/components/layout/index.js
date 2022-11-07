import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import StyledFooter from "../footer/StyledFooter";
import "./styles";
import { Container, Content, HeaderContainer, Wrapper } from "./styles";
import { BrowserRouter as BrowserRouter, Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Container>
        {" "}
        <Wrapper>
          <Navbar />
          <Content>{children}</Content>
          {/* <div
          style={{ width: "100%", height: "50px", backgroundColor: "black" }}
        ></div> */}
          <StyledFooter />
          {/* <Footer /> */}
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
};
export default Layout;
