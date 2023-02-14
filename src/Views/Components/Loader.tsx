import React from "react";
import "../css/home.css";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-10, 10],
    y: [0, -20],
    transition: {
      x: {
        loop: Infinity,
        duration: 0.5,
      },
      y: {
        loop: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animateTwo: {
    y: [0, -20],
    x: 0,
    transition: {
      y: {
        loop: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");

  return (
    <div>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      {/* <div onClick={() => cycleAnimation()}>Cycle Loader</div> */}
    </div>
  );
};

export default Loader;
