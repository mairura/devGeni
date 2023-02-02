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

function App() {
  //Set a loading page
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
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
          <div className="main">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/project" element={<ProjectDetail />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="/details" element={<Details />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/devdata" element={<Devdata />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
