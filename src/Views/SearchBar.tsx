import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Config } from "../config/config";
import { AiFillCloseCircle } from 'react-icons/ai';
import "./css/home.css";
import axios from "axios";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

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
  // const localParams: any = localStorage.getItem("params");
  const location = useLocation()
  const initialDesc = location.state

  const [inputData, setInputData] = useState(initialDesc && initialDesc.hasOwnProperty("data") ? initialDesc.data : "");
  const [tags, setTags] = useState<string[]>([]);
  const [initialUpdate, setInitialUpdate] = useState(false);
  const [matchedTags, setMatchedTags] = useState<string[]>([]);

  let url = Config.URL;
  const navigate = useNavigate()


  // Check if the word a user types in is in the list of tags 
  const matchTags = (word: string) => {
    if (word) {
      word = word.toLowerCase().trim()

      if (tags.includes(word) && !matchedTags.includes(word)) {
        setMatchedTags([...matchedTags, word.trim()])
      }
    }
  }

  // Only runs if the initialUpdate has not been set, meaning that it will only match the initial tags once, solving the 
  // bug of tags not getting deleted as user delete description that had matched it. Explanation at handleInputChangeData()
  if (initialDesc && initialDesc.hasOwnProperty("data") && !initialUpdate) {
    const initialPrompt = initialDesc.data;
    const initialPromptParts = initialPrompt.split(" ");

    initialPromptParts.map((word: string) => matchTags(word))
  }


  // REVIEW: Display tags that match the input, as the user types
  /**
   * This is kind of a hack since there is no straight forward way to listen for words typed. You can only capture letters typed.
   * Have common word seperates like space, comma, etc. and check whenever the user types any of the word seperators, if any, then
   * get the new word typed and check it against the tags list.  
   */
  const handleInputChangeData = (event: any) => {
    let rawInput = event.target.value;

    // REVIEW: This is a hack, need to find a better way to solve this 
    // Issue: When user deletes description of a tag we need to delete the tag, but since we have a function that also save  
    // tags from the initial description, the tags that were matched from the initial description never get deleted. 
    // Current Solution: have a state initialUpdate that is updated when we think that the initial tags have already been matched,
    // Now thats another hack since we are not sure when that state is updated but we know it waits for all tags to be fetched ,
    // so we can waits for tags to be fetched and also set the initialUpdate. If the initialUpdate is at TRUE that means the 
    // initial tags have been matched already and the component wont try to match it as we delete    
    if (!initialUpdate && tags.length > 0) {
      setInitialUpdate(true)
    }

    const input = rawInput[rawInput.length - 1] // get last character typed, instead of all the input 

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

    // Cater for the case where the user deletes a word that was already a matched tag
    // if the previous string (inputData ) is longer than the current string, it means the users input resulted in the 
    // reduction of the previous string length (delete) 
    if (inputData.length > rawInput.length) {
      matchedTags.map((tag: string) => {

        if (!rawInput.toLowerCase().includes(tag.toLowerCase())) {
          const holder = matchedTags
          const rem = holder.filter(_tag => _tag !== tag)

          setMatchedTags([...rem])

        }
      })
    }

    // Remove all tags if the description is blank
    if (rawInput.length < 1) {
      setMatchedTags([])
    }

    // Update the user input
    setInputData(event.target.value);
  };

  //Function to clear the selected tags 
  const clearStack = () => {
    setMatchedTags([]);
  };

  const fetchAllTags = async () => {
    // TODO: Implement a cahcing mechanism that will save all tags to prevent making a request everytime the user navigates to search page
    const endpoint = `${url}/index/tags`;

    await axios.get(endpoint).then((_tags) => {
      const formattedTags = _tags.data.map((tag: { name: string }) => tag.name)
      setTags(formattedTags)
    }).catch(err => console.log("error ", err))


  }

  useEffect(() => {
    fetchAllTags();
  }, []);

  const navigateToProjects = () => {
    navigate('/projects', { state: { tags: matchedTags } });
  }

  return (
    <div className='searchbar_container'>
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

      {inputData.length === 0 ? <div style={{ width: "100%" }} className="home_btn">
        <div className="tagspage">
          <Tooltip
            anchorId="inputData"
            place="top"
            content="Project description is required "
          />
          <motion.button id="inputData" variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </div> :
        <a onClick={() => navigateToProjects()} style={{ width: "100%" }} className="home_btn">
          <div className="tagspage">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </div>
        </a>
      }
    </div>
  )
}
export default SearchBar 