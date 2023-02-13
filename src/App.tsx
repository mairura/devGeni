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
          <div className={"item"}>
            <HashLoader
              color="#f05e56"
              loading={isLoading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="main_container">
              <div className="main">
                {/* <div>
              <h1>Binance Chain Connector</h1>
              {status === "disconnected" ? (
                <>
                  <button
                    style={{ display: "block", marginBottom: 16 }}
                    onClick={() => connect("injected")}
                  >
                    Connect Metamask
                  </button>
                  <button
                    style={{ display: "block" }}
                    onClick={() => connect("bsc")}
                  >
                    Connect Binance Chain Wallet
                  </button>
                </>
              ) : (
                <button onClick={() => reset()}>Disconnect</button>
              )}
              {error?.message}
              {chainId != null && <p>chainId: {chainId}</p>}
              {account && <p>Connected as {account}</p>}
              {Number(balance) >= 0 && <p>{balance}</p>}
            </div> */}
                <Routes>
                  <Route path="/" element={<StarterPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projectDetails" element={<ProjectDetail />} />
                  <Route path="/book-now" element={<BookNow />} />
                  <Route path="/details" element={<Details />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/devdata" element={<Devdata />} />
                  {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
