import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.png"
import { Config } from "../config/config";
import ContactUs from "./Components/ContactUs";
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
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

  // Check if the word a user types in is in the list of tags 
  const matchTags = (word: string) => {
    word = word.toLowerCase().trim()
    if (tags.includes(word) && !matchedTags.includes(word)) {
      setMatchedTags([...matchedTags, word.trim()])
    }
  }

  // Search for tags in the initial phrase
  const inputParts = inputData.split(" ");
  inputParts.map((word: string) => matchTags(word))

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

      // Cater for the case where the user deletes a word that was already a matched tag
      matchedTags.map((tag: string) => {
        if (!inputData.toLowerCase().includes(tag.toLowerCase())) {

          const index = matchedTags.indexOf(tag);
          if (index > -1) {
            matchedTags.splice(index, 1);
          }

          setMatchedTags([...matchedTags])
        }
      })

      previousSeperator = input;
    }

    // Update the user input
    setInputData(event.target.value);
  };

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
    fetchAllTags();
  }, []);

  const navigateToProjects = () => {
    navigate('/projects', { state: { tags: matchedTags } });
  }

  return (
    <div className='searchbar_container'>
      <div className="search_details">
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
          <textarea className="tag_box" id="" rows={12} cols={4} defaultValue={inputData} onChange={handleInputChangeData}>
          </textarea>
        </div>
        <div className="searchAttrBox">
          <div className="search_box">
            <p>Tags</p>
            <div className="searchData">
              <div className="tag_boxData">
                {matchedTags.map((tag: any, index: any) => {
                  return <p key={index}>{tag}</p>;
                })}
              </div>
              <AiFillCloseCircle onClick={clearStack} />
            </div>
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