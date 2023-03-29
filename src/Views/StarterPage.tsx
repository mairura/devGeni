import { Link } from "react-router-dom";
import "./css/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import LeftChevron from "../assets/LeftChevron.svg"

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
      <div className="main_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="homeHead">
        <div className="home_header">
          <p>DEVGENI</p>
        </div>
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
          showThumbs={false} 
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
      <Link to="/tagspage" style={{ width: "100%" }}>
        <div className="home_btn">
          <motion.button variants={buttonVariants} whileHover="hover">
            Build a Project
          </motion.button>
        </div>
      </Link>
      <Link to="/allprojects" style={{ width: "100%" }} className="rightChevron">
        <div className="explore"><p>Explore Projects</p><img src={LeftChevron} alt="leftchevron" /></div>
      </Link>
    </div>
  );
};

export default StarterPage;
