import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <nav>
        <ul>
          <Link to="/projects" className="my_links">
            <li>Menu</li>
          </Link>
          <Link to="/about" className="my_links">
            <li>About</li>
          </Link>
          <Link to="/projects" className="my_links">
            <li>FAQS</li>
          </Link>
          <Link to="/projects" className="my_links">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default ContactUs;
