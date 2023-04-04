import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png"
import { Config } from "../config/config";
import { IParams } from "./Context";
import close from "../assets/close.svg";
import ContactUs from "./Components/ContactUs";
import Hambuger from "../assets/ham.svg";
import "./css/home.css";
import axios from "axios";

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


let previousSeperator: any = "";
const wordSeperators = [" ", ",", ";", ":", ".", "?", "!", "/", "\\", "(", ")", "[", "]", "{", "}", "<", ">", "|", "`", "~", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", "'", '"'];

const SearchBar = (props: any) => {
  const localParams: any = localStorage.getItem("params");
  const [inputData, setInputData] = useState(localParams);
  const [tags, setTags] = useState<string[]>([]);
  const [matchedTags, setMatchedTags] = useState<string[]>([]);

  let url = Config.URL;

  const navigate = useNavigate()

  // REVIEW: Display tags that match the input, as the user types
  /**
   * This is kind of a hack since there is no straight forward way to listen for words typed. You can only capture letters typed.
   * Have common word seperates like space, comma, etc. and check whenever the user types any of the word seperators, if any, then
   * get the new word typed and check it against the tags list.  
   */
  const handleInputChangeData = (event: any) => {
    let input = event.target.value;
    input = input[input.length - 1] // get last character typed, instead of all the input 
    // console.log("sep ", JSON.stringify(previousSeperator))

    if (wordSeperators.includes(input)) {
      // Get the last phrase
      let currentInput = inputData.split(input)
      let word: string = currentInput[currentInput.length - 1]

      if (input !== previousSeperator) {
        let middlePhrase = word.split(previousSeperator)
        word = middlePhrase[middlePhrase.length - 1]
      }

      matchTags(word)

      previousSeperator = input;
    }

    // Update the user input
    setInputData(event.target.value);
  };

  // Check if the word a user types in is in the list of tags 
  const matchTags = (word: string) => {
    if (tags.includes(word) && !matchedTags.includes(word)) {
      setMatchedTags([...matchedTags, word])
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  //Function to clear the selected tags 
  const clearStack = () => {
    setMatchedTags([]);
  };

  const fetchAllTags = async () => {
    // TODO: Implement a cahcing mechanism that will save all tags to prevent making a request everytime the user navigates to search page

    const endpoint = `${url}/index/tags`;

    try {
      const { data } = await axios.get(endpoint);
      const formattedTags = data.map((tag: { name: string }) => tag.name)

      setTags(formattedTags);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  }

  useEffect(() => {

    // REVIEW: Remove the implmentation to save tags in local storage
    /**
     * This implementation is flawed since it persists the tags even when the user starts a new search with a different started text 
     * eg the user clicks on I want a website and then navigates back and clicks on I want a mobile app, 
     * the tags from the website will still be there
     * 
     * A better approach is fetch all tags in advance and display the tags on live search 
     */

    // function checkLocalStorage() {
    //   if (!localStorage.length) {
    //     return null;
    //   } else {
    //     let tag_string: any = localStorage.getItem("dataParams");
    //     let results: any;
    //     if (tag_string != null) {
    //       results = SplitNames(tag_string);
    //       const results_parsed = JSON.parse(results)
    //       setParams(results_parsed)
    //     }
    //     return results;
    //   }
    // }

    fetchAllTags();

  }, []);

  const navigateToProjects = () => {

    navigate('/projects', { state: { tags: matchedTags } });
  }

  return (
    <div className='searchbar_container'>
      <div>
        <div className="searchbar_menu">
          <div className='tags_header'><img src={Logo} alt="logo" /><p>DEVGENI</p></div>
          <div className="hambuger">
            {isOpen ? (
              <img src={close} alt="close" onClick={closeMenu} />
            ) : (
              <img src={Hambuger} alt="logo" onClick={toggleIcon} />
            )}
          </div>
        </div>
        {isOpen && <ContactUs />}

      </div>
      <div className="searchbar">
        <h4>Tell Us in Detail What You'd Like Us To Build</h4>
        <div className="tagBox">
          <textarea className="tag_box" rows={12} cols={4} defaultValue={inputData} onChange={handleInputChangeData}>
          </textarea>
          {/* REVIEW: Get rid of the click to search in favour of on live (on type) search */}
          {/* <div className="home_btn">
            <button onClick={handleAPICall} className="search">
              Click to search
            </button>
          </div> */}
        </div>
        <div className="searchAttrBox">
          <div className="search_box">
            <p>Tags</p>
            <div className="tag_boxData">
              {matchedTags.map((tag: any, index: any) => {
                return <p key={index}>{tag}</p>;
              })}

            </div>
            <img src={close} alt="close" onClick={clearStack} />
          </div>
        </div>
      </div>
      <a onClick={() => navigateToProjects()} style={{ width: "100%" }} className="home_btn">
        <div className="tagspage">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </a>
    </div>
  )
}
export default SearchBar 