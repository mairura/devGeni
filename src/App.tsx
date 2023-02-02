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
import Preloader from "./Views/Components/Preloader.tsx/Preloader";

function App() {
  //Set a loading page
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
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
