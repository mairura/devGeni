import { useEffect, useState } from "react";
import "./css/style.css";
import Title from "../assets/title.png";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ksh } from "../icons";
import axios from "axios";
import { ProjectContext, IProjects } from "./Context";
import { Config } from "../config/config";
import { Tabs, TabPanel, Tab, TabList } from "react-tabs";
import Details from "./Details";
import { ExternalLink } from "react-external-link";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function Projects() {
  const [tags, setTags] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [getStacks, setGetStacks] = useState([]);
  let url = Config.URL;

  //Function to handle selected stack to be called
  const handleStack = (e: any) => {
    e.preventDefault();
    let tagList = [...tags, e.target.value];
    if (!tags.includes(e.target.value)) {
      setTags(tagList);
      let newList: string = tagList.join();
      getData(newList);
    }
  };

  //Function to submit choosen stack and find resp projects
  const getData = async (stackToSearch: string) => {
    setShowPage(false);
    const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
    try {
      const { data } = await axios.get(endpoint);
      setProjects([...data]);
      setShowPage(true);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  //Function to get all stacks from all projects
  const getStack = async () => {
    const stack = await axios.get(`${url}/index/tags`);
    let stacks = stack.data;
    setGetStacks(stacks);
  };

  useEffect(() => {
    setTimeout(() => setLoader(false), 7000);
  }, []);

  useEffect(() => {
    getStack();
  }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="main_header">
      <>
        <div>
          <div className="header">
            <img src={Title} alt="title" />
            <TypeAnimation
              sequence={["Team and Skill Matching Engine", 1000, () => {}]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", color: "lightgray" }}
            />
          </div>
          <div className="header_data">
            <NavLink className="devdata_link" to="/">
              <p className="link">Projects</p>
            </NavLink>
            <NavLink to="devdata" className="devdata_link">
              <p className="link">Developers</p>
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
            {tags.map((item, i) => {
              return (
                <div key={i + 1} className="tag">
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
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
              <Tabs
                className="tabs"
                id="controlled-tabs"
                selectedTabClassName="bg-orange"
              >
                <TabList className="tablist">
                  <Tab>Slide</Tab>
                  <Tab>List</Tab>
                </TabList>
                <TabPanel style={{ maxHeight: "55vh" }}>
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
              <div className="buttons">
                <ExternalLink
                  href="https://calendly.com/ngeni-info"
                  className="btn_link"
                >
                  <button className="booking-button">Book Now</button>
                </ExternalLink>
                <button className="booking-button">{ksh} Speak Now</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;
