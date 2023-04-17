import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./css/home.css";
import { useState, useEffect } from "react";

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
<<<<<<< HEAD
  const [requests, setREquests] = useState([
    {
      name: "App Development...",
      class: "text_button",
    },
    {
      name: "Design me a Web3 App",
      class: "text_button",
    },
    {
      name: "Build me a trading bot for...",
      class: "text_button",
    },
    {
      name: "Create me a Web3 Wallet",
      class: "text_button",
    },
    {
      name: "Build me an NFT Marketplace",
      class: "text_button",
    },
    {
      name: "Design me a Web3 Social App for...",
      class: "text_button",
    },
    {
      name: "Create a DAO...",
      class: "text_button",
    },
    {
      name: "Build AI Chatbot that...",
      class: "text_button",
    },
    {
      name: "I want a Gateways/CEX that...",
      class: "text_button",
    },
    {
      name: "Build a DEFI",
      class: "text_button",
    },
    {
      name: "I need a Gaming App that...",
      class: "text_button",
    },
  ]);
=======
  const requests = ["App Development ", "Design me a Web3 App ", "Build me a trading bot for ", "Create me a Web3 Wallet", "Build me an NFT Marketplace ", "Design me a Web3 Social App for ", "Create a DAO ", "Build AI Chatbot that ", "I want a Gateways/CEX that ", "Build a DEFI ", "I need a Gaming App that "];
  const [activeButton, setActiveButton] = useState(null);
  const [initialPrompt, setInitialPrompt] = useState(null);
  const navigate = useNavigate()
>>>>>>> c8c4006a09e0e2a50c2a54319e4ecee10975bcd4

  const navigate = useNavigate();

  const ClickEvent = (request: any) => {
    request.class = "clicked_button";
    navigate("/searchbar", { state: { data: request.name } });
  };

  return (
    <div className="tags_container">
      <div className="category">
        <h4>Choose what you're interested in.</h4>
        <div className="main_request">
          {requests.map((request: any, index: any) => {
            return (
              <button
                key={index}
                onClick={() => {
                  ClickEvent(request);
                }}
                className={request.class}
              >
                {request.name}
              </button>
            );
          })}
        </div>
      </div>
      {/* <a
        onClick={() => navigateToSearchBar()}
        style={{ width: "100%" }}
        className="home_btn"
      >
        <div className="tagspage">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </a> */}
    </div>
  );
};

export default TagsPage;
