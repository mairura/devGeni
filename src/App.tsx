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
import NotFound from "./Views/Components/NotFound";
import StarterPage from "./Views/StarterPage";
// import { useWallet } from "react-binance-wallet";
import ContactUs from "./Views/Components/ContactUs";
import AboutPage from "./Views/Components/AboutPage";
import FAQsPage from "./Views/Components/FAQsPage";
import ContactUsPage from "./Views/Components/ContactUsPage";
import ScreenView from "./Views/ScreenView";
import AllProjects from "./Views/AllProjects";
import TagsPage from "./Views/TagsPage";
import SearchBar from "./Views/SearchBar";
import SearchAttributes from "./Views/SearchAttributes";

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
          <div className="container">
            <div className="main_container">
              <div className="main">
                <Routes>
                  <Route path='/' element={<ScreenView />} />
                  <Route path="/starterpage" element={<StarterPage />} />
                  <Route path='/tagspage' element={<TagsPage />} />
                  <Route path="/searchbar" element={<SearchBar />} />
                  <Route path="/searchattributes" element={<SearchAttributes />} />
                  <Route path="/home" element={<Projects />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projectDetails" element={<ProjectDetail />} />
                  <Route path="/book-now" element={<BookNow />} />
                  <Route path="/details" element={<Details />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/devdata" element={<Devdata />} />
                  <Route path="/allprojects" element={<AllProjects />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/contactus" element={<ContactUsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/faqs" element={<FAQsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </>
  );
}

export default App;
