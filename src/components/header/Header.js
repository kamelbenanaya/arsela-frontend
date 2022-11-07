import React, { useState, useContext, useEffect } from "react";
import "./header.css";
import logoheader from "../../images/normal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { BrowserRouter as Link } from "react-router-dom";

import { useGlobalContext } from "../../context/GlobalContext";
import {
  Menu,
  LogoMenu,
  NavMenu,
  IconMenu,
  HamburgerMenuContainer,
  StyledFontAwesomeIcon,
  Countshopcard,
  ContainerCartShopping,
  LogoImg,
} from "./styles";
function Header() {
  const { globalState } = useGlobalContext();

  return (
    <Menu>
      <LogoMenu>
        <LogoImg className="logo" src={logoheader} alt="aaa" />
      </LogoMenu>
      <NavMenu>
        <nav>
          <ul>
            <li className="deroulant">
              <Link to="/">Home</Link>
            </li>
            <li className="deroulant">
              <Link to="/cart">About</Link>
            </li>
            <li>
              <a href="./">Contact us</a>
            </li>
            <li>
              <a href="./" className="categoriesmenu">
                Categories <i className="arrow down"></i>
              </a>
              <ul className="sous">
                <li>
                  <a href="./">Laptop</a>
                </li>
                <li>
                  <a href="./">Phone</a>
                </li>
                <li>
                  <a href="./">Accessoires</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </NavMenu>
      <IconMenu>
        <StyledFontAwesomeIcon icon={faHeart} />

        <Link to="/cart">
          <ContainerCartShopping>
            <StyledFontAwesomeIcon icon={faCartShopping} />
            <Countshopcard>{globalState.cartTotalItems} </Countshopcard>
          </ContainerCartShopping>
        </Link>
        <StyledFontAwesomeIcon icon={faUser} />
      </IconMenu>
      <HamburgerMenuContainer>
        <HamburgerMenu />
      </HamburgerMenuContainer>
    </Menu>
  );
}

export default Header;
