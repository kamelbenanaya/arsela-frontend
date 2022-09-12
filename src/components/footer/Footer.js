import React from "react";
import "./footer.css";
import logoFooter from "../../images/white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-logo">
        <img className="logo" src={logoFooter} alt="aaa"></img>
      </div>
      <div className="footer-menu">
        <ul className="information">
          {" "}
          information
          <li>
            <a href="./">Stocks</a>
          </li>
          <li>
            <a href="./">Shops</a>
          </li>
          <li>
            <a href="./">News</a>
          </li>
        </ul>
        <ul className="information">
          {" "}
          Clients
          <li>
            <a href="./">Corporate sales</a>
          </li>
          <li>
            <a href="./">Delivery and payment</a>
          </li>
          <li>
            <a href="./">About company</a>
          </li>
        </ul>
        <ul className="information">
          {" "}
          Additionally
          <li>
            <a href="./">Services Center</a>
          </li>
          <li>
            <a href="./">Terms of use of the site</a>
          </li>
        </ul>
      </div>
      <div className="additonal">
        <p style={{ fontSize: "15px", paddingRight: "23px" }}>Additionally</p>
        <div className="abc">
          <FontAwesomeIcon icon={faFacebookF} className="iconFooter facebook" />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="iconFooter Linkedin "
          />
          <FontAwesomeIcon icon={faYoutube} className="iconFooter Youtube" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
