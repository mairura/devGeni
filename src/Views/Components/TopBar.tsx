import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/topBar.css";
import Logo from "../../assets/Logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import ContactUs from "./ContactUs";
import { IParams } from "../Context";

const TopBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState<Array<IParams>>([]);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  //Function to clear stack in localStorage
  const clearStack = () => {
    localStorage.clear();
    setParams([]);
};
  return (
    <div className="top_bar">
      <div className="search_barTop">
        <div className="previous">
            {" "}<AiOutlineLeft onClick={() => navigate(-1)} className="btn_navigate" />
            {" "}
        </div>

        <div className="top_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hambuger">
          {isOpen ? (
            <AiFillCloseCircle onClick={closeMenu} className="close_btn" />
          ) : (
            <GiHamburgerMenu onClick={toggleIcon} className="hamburger" />
          )}
        </div>
      </div>
      {isOpen && <ContactUs />}
    </div>
  );
};

export default TopBar;
