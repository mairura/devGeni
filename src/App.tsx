import "./App.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./Views/Projects";
import "./Views/css/style.css";
import Footer from "./Views/Components/Footer";
import ProjectDetail from "./Views/ProjectDetail";
import BookNow from "./Views/BookNow";
import { useEffect, useState } from "react";
import Details from "./Views/Details";
// import  ngenilogoAsset from "../src/assets/ngenilogoAsset.png"

function App() {
  //Set a loading page
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          {/* <img src={ngenilogoAsset} alt="icon" width="100px" text-align="center" /> */}
        </div>
      ) : (
        <>
          <div className="main">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/project" element={<ProjectDetail />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="/details" element={<Details />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
