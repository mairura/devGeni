import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./css/home.css"

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

const TagsPage = (props: any) => {
  const requests = ["App Development", "Design me a Web3 App", "Build me a trading bot for...", "Create me a Web3 Wallet", "Build me an NFT Marketplace", "Design me a Web3 Social App for...", "Create a DAO...", "Build AI Chatbot that...", "I want a Gateways/CEX that...", "Build a DEFI", "I need a Gaming App that..."];
  const [activeButton, setActiveButton] = useState(null);
  const [initialPrompt, setInitialPrompt] = useState(null);
  const navigate = useNavigate()


  // Function to handle button click
  const handleClick = (e: any) => {
    setActiveButton(e)
  };

  const navigateToSearchBar = () => {
    navigate('/searchbar', { state: { data: initialPrompt } });
  }

  return (
    <div className='tags_container'>
      <div className='category'>
        <h4>Choose what you're interested in.</h4>
        <div className="main_request">
          {requests.map((request: any, index: any) => {
            const clickEvent = (index1: any) => {
              // localStorage.setItem("params", request);
              setActiveButton(index1);
              setInitialPrompt(request)
            }
            return (
              <button key={index} onClick={clickEvent}   >
                {request}
              </button>
            );
          })}
        </div>
      </div>
      <a onClick={() => navigateToSearchBar()} style={{ width: "100%" }} className="home_btn">
        <div className="tagspage">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </a>
      {/* <Link to="/searchbar" style={{ width: "100%" }} className="home_btn">

      </Link> */}
    </div>
  )
}

export default TagsPage