import "../css/style.css";
import ngeniLogo from "../../assets/LOGO.svg";

function Footer() {
  return (
    <div className="footer_container">
      <i className="footer_italic">“Transforming ideas into reality”</i>
      <br />
      <p className="footer-text">
        <br />
        Powered by NGENI LABs&nbsp; &#169;&nbsp; 2023
        {/* <img src={ngeniLogo} alt="footer-logo" /> */}
      </p>
    </div>
  );
}

export default Footer;
