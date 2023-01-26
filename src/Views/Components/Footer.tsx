import React from "react";
import "../css/style.css";
import ngeniLogo from "../../assets/ngenilogoAsset.png";

function Footer() {
  return (
    <div className="footer_container">
      <p className="footer-text">
        Powered by &nbsp; <img src={ngeniLogo} alt="footer-logo" />
      </p>
    </div>
  );
}

export default Footer;
