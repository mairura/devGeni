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

const SearchBar = () => {
    const { projects, devs, params } = useContext(ProjectContext);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
      };
  return (
    <div className='searchbar_container'>
        <div className='searchbar_header'>DEVGENI</div>
        <div>
            <h4>Tell Us what you would like to build</h4>
            <div className="select1">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="searchBox"
                placeholder="Project Title"
              />
            </div>
            <div className="tagBox">
                <div className="tag_box">
                  <p>Description</p>
                  <div className="tag_boxData">
                    {params.map((param: any) => {
                      return <p>{param}</p>;
                    })}
                  </div>
                </div>
            </div>
        </div>
        <Link to="/searchattributes" style={{ width: "100%" }}>
        <div className="home_btn">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </Link>
    </div>
  )
}

export default SearchBar