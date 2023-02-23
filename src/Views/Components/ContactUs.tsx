import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <nav>
        <ul>
          <Link to="/projects">
            <li>Menu</li>
          </Link>
          <Link to="/projects">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>FAQS</li>
          </Link>
          <Link to="/projects">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default ContactUs;
