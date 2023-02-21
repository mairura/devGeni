import "../css/style.css";
import Logo from "../../assets/newLogo.svg";

function Footer() {
  const getYear = () => {
    let year = new Date().getFullYear();
    return year;
  };
  return (
    <div className="footer_container">
      <i className="footer_italic">“Transforming ideas into reality”</i>
      <br />
      <p className="footer-text">
        <br />
        Powered by <img src={Logo} alt="logo" />
        &nbsp;&#169;&nbsp; {getYear()}
      </p>
    </div>
  );
}

export default Footer;
