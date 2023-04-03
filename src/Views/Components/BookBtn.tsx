import { ExternalLink } from "react-external-link";
import { motion } from "framer-motion";
import "../css/bookbtn.css"

const containerVariantsY = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
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

const BookBtn = () => {
  return (
    <div>
     <div className="bookbtn_container">
           <ExternalLink
              href="https://calendly.com/ngeni-info"
              className="btn_link"
            >
              <button
                className="booking-button"
              >
                Book Now
              </button>
            </ExternalLink>
      </div>
            <div className="empty"></div>
    </div>
    )
}

export default BookBtn