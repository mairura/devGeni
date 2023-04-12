import { Link } from "react-router-dom";
import "../css/style.css";
import { useState } from "react";

const ContactUs = () => {
  const [menuVisible, setMenuVisible] = useState(true);

  function handleMenuClick() {
    setMenuVisible(false);
  }

  return (
    <div className="contactUsContainer">
      <nav style={{ display: menuVisible ? "block" : "none" }}>
        <ul>
          <Link to="/about" className="my_links">
            <li onClick={handleMenuClick}>About</li>
          </Link>
          <Link to="/faqs" className="my_links">
            <li onClick={handleMenuClick}>FAQS</li>
          </Link>
          <Link to="/contactus" className="my_links">
            <li onClick={handleMenuClick}>CONTACT US</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default ContactUs;
