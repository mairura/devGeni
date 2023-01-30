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
import { ExternalLink } from "react-external-link";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

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
      // console.log("NewList", newList);
      getData(newList);
      // console.log("Tags:", tagList);
    }
  };

  //Function to submit choosen stack and find resp projects
  const getData = async (stackToSearch: string) => {
    setShowPage(false);
    const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
    // console.log("Endpoint:", endpoint);
    try {
      const { data } = await axios.get(endpoint);
      setProjects([...data]);
      console.log("Projects", data);
      console.log("Project Length:", data.length);
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
          <TypeAnimation
            sequence={["Team and Skill Matching Engine", 1000, () => {}]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em", color: "#fff" }}
          />
          {/* <p style={{ color: "#fff" }}>Team and Skill Matching Engine</p> */}
        </div>
        <div className="header_data">
          <Link to="/" className="devdata_link">
            <p>Projects</p>
          </Link>
          <Link to="devdata" className="devdata_link">
            <p>Developers</p>
          </Link>
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
            <i className="project_number">
              Found&nbsp;{projects.length}&nbsp;projects for stack&nbsp;{tags}
            </i>
          </form>
        </div>{" "}
      </>
      {!showPage ? (
        ""
      ) : (
        <>
          <Tabs className="tabs">
            <TabList className="tablist">
              <Tab>Slide</Tab>
              <Tab>List</Tab>
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
          <ExternalLink
            href="https://calendly.com/ngeni-info"
            className="btn_link"
          >
            <button className="booking-button">Book Now</button>
          </ExternalLink>

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
