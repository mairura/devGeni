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

const TagsPage = () => {
    const actions = ["I want...", "Design me a...", "Build me a mobile app..."];
    const requests = ["App Development", "Web3 Design", "Trading Bots", "Wallte", "NFT Marketplace", "Web3 Social", "DAO", "AI Chatbots", "Gateways/CEX", "DEFI", "Games"]
  return (
    <div className='tags_container'>
        <div className='tags_header'>DEVGENI</div>
        <div className='category'>
            <h4>Choose what you're interested in.</h4>
            <div className="main_request">
                {requests.map((request: any, index: any) => {
                  return (
                    <button key={index}>
                      {request}
                    </button>
                  );
                })}
              </div>
        </div>
        <div className='actions'>
            <h4>Choose Your Actions</h4>
            <div className="main_request">
                {actions.map((request: any, index: any) => {
                  return (
                    <button key={index}>
                      {request}
                    </button>
                  );
                })}
              </div>
        </div>
        <Link to="/home" style={{ width: "100%" }}>
        <div className="home_btn">
          <motion.button variants={buttonVariants} whileHover="hover">
            Next
          </motion.button>
        </div>
      </Link>
    </div>
  )
}

export default TagsPage