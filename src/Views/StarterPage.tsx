import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const StarterPage = () => {
  return (
    <div className="home_container">
      <div className="gradient" />
      <div className="home_header">
        <p>DEVGENI</p>
      </div>
      <div className="home_subheader">
        <p>DESIGN.DEVELOP.DELIVER</p>
      </div>
      <div className="carousel_page">
        <Carousel>
          <div className="carousel_data">
            <p>
              {" "}
              Searching for a skilled developer or team to work on your next
              software project?
            </p>
          </div>
          <div>
            <p>
              Empower your project with experienced DevGeni software developers
              specializing in front-end to back-end, Web3, and blockchain
              technologies.
            </p>
          </div>
        </Carousel>
      </div>
      <Link to="/home">
        <div className="home_btn">
          <button>Explore</button>
        </div>
      </Link>
    </div>
  );
};

export default StarterPage;
