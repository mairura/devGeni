import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./Views/css/style.css";
import Footer from "./Views/Components/Footer";
import BookNow from "./Views/BookNow";
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
import AllProjects from "./Views/AllProjects";
import TagsPage from "./Views/TagsPage";
import SearchBar from "./Views/SearchBar";
import ProjectCard from "./Views/ProjectCard";
import PageDetails from "./Views/PageDetails";

function App() {

  return (   
        <>
          <div className="container">
            <div className="main_container">
              <div className="main">
                <Routes>
                  <Route path="/" element={<StarterPage />} />
                  <Route path='/tagspage' element={<TagsPage />} />
                  <Route path="/searchbar" element={<SearchBar />} />
                  <Route path="/projects" element={<ProjectCard />} />
                  <Route path="/page-details" element={<PageDetails />} />
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
