import React from "react";
import { Link } from "react-router-dom";
import "./css/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

const buttonVariants = {
  hover: {
    scale: 1.03,
    textShadow: "0px 0px 8px rgb(255, 255, 255",
    boxShadow: "0px 0px 8px rgb(255, 255, 255",
    transition: {
      duration: 0.5,
      repeat: Infinity,
    },
  },
};

const StarterPage = () => {
  return (
    <div className="home_container">
      <div className="gradient" />
      <motion.div
        className="main_logo"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <img src={Logo} alt="logo" />
      </motion.div>
      <div className="homeHead">
        <motion.div
          className="home_header"
          initial={{ y: 250 }}
          animate={{ y: 10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          style={{ position: "relative" }}
        >
          <p>DEVGENI</p>
        </motion.div>
        <div className="home_subheader">
          <p>DesiGn.DeVelop.DeLiver</p>
        </div>
      </div>

      <div className="carousel_page">
        <Carousel
          autoPlay={true}
          showArrows={false}
          transitionTime={1000}
          infiniteLoop={true}
          interval={4000}
          showStatus={false}
        >
          <div className="carousel_data">
            <p>
              {" "}
              Searching for a skilled developer or team to work on your next
              software project?
            </p>
            <br />
            <br />
          </div>
          <div className="carousel_data">
            <p>
              Empower your project with experienced DevGeni software developers
              specializing in front-end to back-end, Web3, and blockchain
              technologies.
            </p>
            <br />
            <br />
          </div>
        </Carousel>
      </div>
      {/* <Loader /> */}
      {/* <img src={gif} alt="logo" /> */}
      <Link to="/home" style={{ width: "100%" }}>
        <div className="home_btn">
          <motion.button variants={buttonVariants} whileHover="hover">
            Explore
          </motion.button>
        </div>
      </Link>
    </div>
  );
};

export default StarterPage;
