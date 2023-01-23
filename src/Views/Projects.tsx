import { useState } from "react";
import "./css/style.css";
import Title from "../assets/title.png";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ksh } from "../icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectContext, IProjects } from "./Context";

function Projects() {
  const [tags, setTags] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [showPage, setShowPage] = useState(false);

  //Function to handle selected stack to be called
  const handleStack = (e: any) => {
    e.preventDefault();
    let tagList = [...tags, e.target.value];
    if (!tags.includes(e.target.value)) {
      setTags(tagList);
      let newList: string = tagList.join();
      console.log("NewList", newList);
      getData(newList);
      console.log("Tags:", tagList);
    }
  };

  //Function to submit choosen stack and find resp projects
  const getData = async (stackToSearch: string) => {
    setShowPage(false);
    const endpoint: string = `http://127.0.0.1:8000/index/projects/tags/${stackToSearch}`;
    console.log("Endpoint:", endpoint);
    try {
      const { data } = await axios.get(endpoint);
      setProjects([...data]);
      console.log("Projects", projects);
      setShowPage(true);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <>
        {" "}
        <div className="header">
          <img src={Title} alt="title describe" />
          <p style={{ color: "#fff" }}>Team and Skill Matching Engine</p>
        </div>
        <div className="search-bar">
          <form>
            <select
              onChange={(e) => {
                handleStack(e);
              }}
            >
              <option value="">Choose Stack</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Javascript">Javascript</option>
              <option value="Typescript">Typescript</option>
              <option value="Solidity">Solidity</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Rust">Rust</option>
            </select>
            <button type="submit" className="select btn">
              Search Project
            </button>
            <div className="current-tags">
              {tags.map((item, i) => (
                <div key={i + 1} className="tag">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </form>
        </div>{" "}
      </>
      {!showPage ? (
        ""
      ) : (
        <>
          <ProjectContext.Provider value={{ projects }}>
            <ProjectCard />
          </ProjectContext.Provider>
          <Link to="book-now">
            <button className="booking-button">Book Now</button>
          </Link>
          <br />
          <br />
          <button className="booking-button">
            {ksh} Speak to Dev Team Now
          </button>
          <br />
          <br />
        </>
      )}
    </div>
  );
}

export default Projects;
