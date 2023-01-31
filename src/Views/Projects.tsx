import { useEffect, useState, useContext } from "react";
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
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// import ProfileList from "./ProfileList";

function Projects() {
  const [tags, setTags] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [getStacks, setGetStacks] = useState([]);
  let url = Config.URL;
  // console.log("Print this:", projects);

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
    try {
      const { data } = await axios.get(endpoint);
      setProjects([...data]);
      // console.log("Projects", data);
      // console.log("Project Length:", data.length);
      setShowPage(true);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  //Function to get all stacks from all projects
  const getStack = async () => {
    const stack = await axios.get(`${url}/index/tags`);
    // console.log("Stack Listed:", stack.data);
    let stacks = stack.data;
    setGetStacks(stacks);
  };

  // console.log("All Stacks gotten:", getStacks);

  useEffect(() => {
    setTimeout(() => setLoader(false), 7000);
  }, []);

  useEffect(() => {
    getStack();
  }, []);

  return (
    <div className="main_header">
      <>
        <div>
          <div className="header">
            <img src={Title} alt="title describe" />
            <TypeAnimation
              sequence={["Team and Skill Matching Engine", 1000, () => {}]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.5em", color: "#fff" }}
            />
          </div>
          <div className="header_data">
            <NavLink className="devdata_link" to="/">
              <p>Projects</p>
            </NavLink>
            <NavLink to="devdata" className="devdata_link">
              <p>Developers</p>
            </NavLink>
          </div>
        </div>
        <div className="search-bar">
          <form>
            <select
              onChange={(e) => {
                handleStack(e);
              }}
            >
              <option>Choose Stack</option>
              {getStacks.map((item: any, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </form>
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
        </div>
      </>
      {!showPage ? (
        ""
      ) : (
        <>
          {loader ? (
            <div className={"item"}>
              <HashLoader
                color="#f05e56"
                loading={loader}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
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
        </>
      )}
    </div>
  );
}

export default Projects;
