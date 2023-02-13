import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";

const StarterPage = () => {
  return (
    <div className="home_container">
      {" "}
      <Link to="/home">
        <div className="home_btn">
          <button>Explore</button>
        </div>
      </Link>
    </div>
  );
};

export default StarterPage;
