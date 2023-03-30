import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/topBar.css";
import Logo from "../../assets/Logo.png";
import Hambuger from "../../assets/ham.svg";
import close from "../../assets/close.svg";
import { prev } from "../../icons";
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
        <div>
          <button onClick={() => navigate(-1)} className="btn_navigate">
            {" "}
            {prev}{" "}
          </button>
        </div>

        <div className="top_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hambuger">
          {isOpen ? (
            <img src={close} alt="close" onClick={closeMenu} />
          ) : (
            <img src={Hambuger} alt="logo" onClick={toggleIcon} />
          )}
        </div>
      </div>
      {isOpen && <ContactUs />}
      <div className="searchTitle">
        <p>Project highlights and dev team</p>
      </div>
    </div>
  );
};

export default TopBar;
