import React, { useState } from "react";
import "./hamburgerMenu.css";
import { BrowserRouter as Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Wrapperhamburger, StyledFontAwesomeIcon,StyledLink,Styledli,Styledul,Styledi,StyledivPostion} from "./stylesHamburger";
export const HamburgerMenu = () => {
  const [menulist, setMenuList] = useState(false);
  const [sousMenuList, setSousMenuList] = useState(false);

  return (
    // && ||
    <Wrapperhamburger>
      <StyledFontAwesomeIcon
        icon={faBars}
        onClick={() => setMenuList(!menulist)}
      />
      <Styledul style={{ display: menulist ? "block" : "none" }}>
        <Styledli>
          <Link to="/">Home</Link>
        </Styledli>
        <Styledli>
          <Link to="/cart">About</Link>
        </Styledli>
        <Styledli>
        <Link to="/">Contact us</Link>
        </Styledli>
        <StyledivPostion>
        <Styledli>
        <Link to="/">
            Categories{" "}
            <Styledi
              className="arrow down-hamburger"
              onClick={() => setSousMenuList(!sousMenuList)}
            ></Styledi>
          </Link>
          {sousMenuList && (
            <Styledul
              
              // style={{display: sousMenuList ? "block" : "none" }}
            >
              <Styledli>
              <Link to="/">Laptop</Link>
              </Styledli>
              <Styledli>
              <Link to="/">Phone</Link>
              </Styledli>
              <Styledli>
              <Link to="/">Accessoires</Link>
              </Styledli>
            </Styledul>
          )}
        </Styledli></StyledivPostion>
      </Styledul>
    </Wrapperhamburger>
  );
};
