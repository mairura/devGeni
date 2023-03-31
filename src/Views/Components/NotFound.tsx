import { Link } from "react-router-dom";
import "../css/style.css";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

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

const NotFound = () => {
  return (
    <div className="home_container" style={{ color: "#52f2e2", fontSize: 32 }}>
      <div className="main_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div style={{ marginBottom: "4em" }} >
        Oops! Sorry Page Not Found
      </div>
      <Link to="/" style={{ width: "100%" }} className="home_btn">
        <div>
          <motion.button variants={buttonVariants} whileHover="hover">
            Let's Get You Home
          </motion.button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
