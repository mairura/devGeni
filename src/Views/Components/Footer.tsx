import "../css/style.css";
import Logo from "../../assets/mainLogo.svg";

function Footer() {
  const getYear = () => {
    let year = new Date().getFullYear();
    return year;
  };
  return (
    <div className="footer_container">
      <i className="footer_italic">“Transforming ideas into reality”</i>
      {/* <br /> */}
      <p className="footer-text">
        Powered by <img src={Logo} alt="logo" />
        &nbsp;
        <i>&#169;&nbsp; {getYear()}</i>
      </p>
    </div>
  );
}

export default Footer;
