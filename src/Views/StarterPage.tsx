import { Link } from "react-router-dom";
import "./css/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import { FiChevronRight  } from 'react-icons/fi';

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
      <p>Access individual talent, dedicated teams, and all-inclusive technology services from innovative developers who specialize in modern solutions that can scale to meet your specific needs</p>
      </div>
      <Link to="/tagspage" style={{ width: "100%" }} className="home_btn">
        <div>
          <motion.button variants={buttonVariants} whileHover="hover">
            Build a Project
          </motion.button>
        </div>
      </Link>
      <Link to="/allprojects" style={{ width: "100%" }} className="rightChevron">
        <div className="explore"><p>Explore All Projects</p><FiChevronRight /></div>
      </Link>
    </div>
  );
};

export default StarterPage;
