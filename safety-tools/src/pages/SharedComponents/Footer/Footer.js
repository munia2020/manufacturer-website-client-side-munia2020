import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-divs">
        <div>
          <small>Copyright &copy;IsratZahan</small>
        </div>
        <div>
          <a href="#"><small> Privacy Policy</small></a>
          <a href="#"><small className="footer-items">General Terms and Conditions</small></a>
          <a href="#"><small className="footer-items">General Terms and Conditions</small></a>
          <a href="#"><small className="footer-items">Tell Us What You Think</small></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
