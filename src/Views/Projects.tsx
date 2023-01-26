import { useState } from "react";
import "./css/style.css";
import Title from "../assets/title.png";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ksh } from "../icons";
import axios from "axios";
import { ProjectContext, IProjects } from "./Context";
import { Config } from "../config/config";
import { Tabs, TabPanel, Tab, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Details from "./Details";

function Projects() {
  const [tags, setTags] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [showPage, setShowPage] = useState(false);
  let url = Config.URL;

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
    const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
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
    <div className="main_header">
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
              <option value="MongoDB">MongoDB</option>
              <option value="PHP">PHP</option>
              <option value="Ethers">EthersJS</option>
              <option value="NextJS">NextJS</option>
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
            {/* <Link to="details"> */}

            {/* <button>Switch Mode</button> */}
            {/* </Link> */}
          </form>
        </div>{" "}
      </>
      {!showPage ? (
        ""
      ) : (
        <>
          <Tabs>
            <TabList>
              <Tab>Slide</Tab>
              <Tab>Click</Tab>
            </TabList>
            <TabPanel>
              <ProjectContext.Provider value={{ projects }}>
                <ProjectCard />
              </ProjectContext.Provider>
            </TabPanel>
            <TabPanel>
              <ProjectContext.Provider value={{ projects }}>
                <Details />
              </ProjectContext.Provider>
            </TabPanel>
          </Tabs>
          <button className="booking-button">
            <a href="https://calendly.com/ngeni-info">Book Now</a>
          </button>
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
