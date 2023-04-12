import { Link } from "react-router-dom";
import "../css/style.css";
import { useState } from "react";

const Menu = (props: any) => {
  const [menuVisible, setMenuVisible] = useState(true);

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
    props.toggleMenu(!props.menuState);
  }

  return (
    <div className="contactUsContainer">
      <nav style={{ display: menuVisible ? "block" : "none" }}>
        <ul>
          <Link onClick={handleMenuClick} to="/about" className="my_links">
            <li>About</li>
          </Link>
          <Link onClick={handleMenuClick} to="/faqs" className="my_links">
            <li>FAQS</li>
          </Link>
          <Link onClick={handleMenuClick} to="/contactus" className="my_links">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
