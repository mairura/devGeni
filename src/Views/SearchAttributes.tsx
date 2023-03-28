import { useContext, useState } from "react";
import { ProjectContext } from "./Context";
import { Link } from "react-router-dom";
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

const SearchAttributes = () => {
    const { projects, devs, params } = useContext(ProjectContext);
  return (
    <div className='searchAtt_container'>
        <div className='searchAttr_header'>DEVGENI</div>
        <div>
            <h4>Choose from tags</h4>
            <div className="tagBox">
                <div className="tag_box">
                  <p>Tags</p>
                  <div className="tag_boxData">
                    {params.map((param: any) => {
                      return <p>{param}</p>;
                    })}
                  </div>
                </div>
            </div>
        </div>
        <Link to="/projects" style={{ width: "100%" }}>
        <div className="home_btn">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </Link>
    </div>
  )
}

export default SearchAttributes