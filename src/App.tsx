import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./Views/Projects";
import "./Views/css/style.css";
import Footer from "./Views/Components/Footer";
import ProjectDetail from "./Views/ProjectDetail";
import BookNow from "./Views/BookNow";
import { useEffect, useState } from "react";
import Details from "./Views/Details";
import Profile from "./Views/Profile";
import Devdata from "./Views/Devdata";
import HashLoader from "react-spinners/HashLoader";
import Home from "./Views/Home";
import NotFound from "./Views/Components/NotFound";
import StarterPage from "./Views/StarterPage";
// import { useWallet } from "react-binance-wallet";
import Logo from "./assets/Logo.png";
import { motion } from "framer-motion";

function App() {
  //Set a loading page
  const [isLoading, setIsLoading] = useState(true);
  // const { account, connect, reset, status, error, balance, chainId } =
  //   useWallet();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <h4 className="loader_title">Team and Skill Matching Engine</h4>
          <motion.div
            className="item"
            initial={{ y: -250 }}
            animate={{ y: 30 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 350 }}
          >
            <img src={Logo} alt="Alt" style={{ height: "150px" }} />
          </motion.div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="main_container">
              <div className="main">
                <Routes>
                  <Route path="/" element={<StarterPage />} />
                  <Route path="/home" element={<Projects />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projectDetails" element={<ProjectDetail />} />
                  <Route path="/book-now" element={<BookNow />} />
                  <Route path="/details" element={<Details />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/devdata" element={<Devdata />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
