import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png"
import { Config } from "../config/config";
import { IParams } from "./Context";
import ContactUs from "./Components/ContactUs";
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./css/home.css";

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

const SearchBar = (props: any) => {
  const localParams: any = localStorage.getItem("params");
    const [inputData, setInputData] = useState(localParams);
    const [params, setParams] = useState<Array<IParams>>([]);

    let url = Config.URL;

    let only_params: string;
    const handleInputChangeData = (event: any) => {
    setInputData(event.target.value);
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };

    //Function takes in user description
    const handleAPICall = () => {
        const endpoint: string = `${url}/index/search_projects`;
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ description: inputData }),
        })
          .then((response) => response.json())
          .then((data) => {
            
            localStorage.setItem("data_projects_searched",JSON.stringify(data))
            const projectParams = data.params;
            setParams(projectParams);
            localStorage.setItem("dataParams", JSON.stringify(projectParams));
          })
          .catch((error) => {
            console.error(error.message);
          });
    };

    const SplitNames = (names: string) => {
    const names_split = names.split(",");
    return names_split;
    };
    
     //Function to clear stack in localStorage
        const clearStack = () => {
            localStorage.clear();
            setParams([]);
        };

    useEffect(() => {
      function checkLocalStorage() {
        if (!localStorage.length) {
            return null;
        } else {
            let tag_string: any = localStorage.getItem("dataParams");
            let results: any;
            if (tag_string != null) {
            results = SplitNames(tag_string);
            const results_parsed = JSON.parse(results)
            setParams(results_parsed)
            }
            return results;
            }
        }
    
      checkLocalStorage();
    }, []);

  return (
    <div className='searchbar_container'>
      <div>
        <div className="searchbar_menu">
          <div className='tags_header'><img src={Logo} alt="logo" /><p>DEVGENI</p></div>
            <div className="hambuger_menu">
            {isOpen ? (
            <AiFillCloseCircle onClick={closeMenu} className="_btn" />
          ) : (
            <GiHamburgerMenu onClick={toggleIcon} className="_btn" />
          )}
            </div>
          </div>
          {isOpen && <ContactUs />}
        </div>
        <div className="searchbar">
            <h4>Tell Us in Detail What You'd Like Us To Build</h4>
            <div className="tagBox">
              <textarea  className="tag_box" rows={12} cols={4} defaultValue={inputData} onChange={handleInputChangeData}>
              </textarea>
              <div className="home_btn">
                <button onClick={handleAPICall} className="search">
                  Click to search
                </button>
              </div>
            </div>
            <div className="searchAttrBox">
                <div className="search_box">
                  <p>Tags</p>
                  <div className="tag_Box">
                    <div className="tag_boxData">
                      {params.map((param: any, index: any) => {
                        return <p key={index}>{param}</p>;
                      })}
                    </div>
                    <div>
                      <AiFillCloseCircle onClick={clearStack} className="_img" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <Link  to='/projects' style={{ width: "100%" }} className="home_btn">
        <div className="tagspage">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </Link>
    </div>
  )
}
export default SearchBar 