import "../css/style.css";

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
        Powered by NGENI LABs&nbsp; &#169;&nbsp; {getYear()}
      </p>
    </div>
  );
}

export default Footer;
