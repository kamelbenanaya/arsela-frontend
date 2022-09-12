import React from "react";
import "./header.css";
import logoheader from "../../images/normal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function Header() {
  return (
    <div className="Menu">
      <div className="logomenu">
        <img className="logo" src={logoheader} alt="aaa"></img>
      </div>
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
            {" "}
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
      <div className="iconsheader">
        <FontAwesomeIcon icon={faHeart} className="iconheader" />
        <FontAwesomeIcon icon={faCartShopping} className="iconheader" />
        <FontAwesomeIcon icon={faUser} className="iconheader" />
      </div>
      <div>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
