import { useEffect, useState } from "react";
import "./css/style.css";
import Title from "../assets/title.png";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { close } from "../icons";
import axios from "axios";
import { ProjectContext, IProjects, ISingleDev } from "./Context";
import { Config } from "../config/config";
import { Tabs, TabPanel, Tab, TabList } from "react-tabs";
import Details from "./Details";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

function Projects() {
  const [tags, setTags] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [getStacks, setGetStacks] = useState([]);

  const [tagsFound, setTagsFound] = useState<Array<string>>([]);

  let url = Config.URL;

  //Function to handle selected stack to be called
  const handleStack = (e: any) => {
    e.preventDefault();
    let tagList: any = [...tags, e.target.value];
    if (!tags.includes(e.target.value)) {
      setTags(tagList);
      let newList: string = tagList.join();
      window.localStorage.setItem("dataTags", newList);
      getData(newList);
    }
  };

  //Function to submit choosen stack and find resp projects
  const getData = async (stackToSearch: string) => {
    setShowPage(false);
    const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
    try {
      const { data } = await axios.get(endpoint);
      setProjects([...data.projects_data]);
      setDevs([...data.dev_data]);
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
    setTimeout(() => setLoader(false), 3000);
  }, []);

  useEffect(() => {
    getStack();

    const foundTags: any = localStorage.getItem("dataTags");
    setTagsFound(foundTags);
    let tagsNewLocal: string | null = localStorage.getItem("dataTags");
    if (tagsNewLocal !== null) {
      getData(tagsNewLocal);
    }
  }, []);

  //Function to clear stack
  const clearStack = () => {
    localStorage.clear();
    setTagsFound([]);
  };

  //Function to get all stacks
  const allStacks = getStacks.map((item: any) => ({
    value: item.name,
    label: item.name,
  }));

  function checkLocalStorage() {
    if (!localStorage.length) {
      return "LocalStorage is empty";
    } else {
      return localStorage.getItem("dataTags");
    }
  }

  // const [selectedOption, setSelectedOption] = useState(allStacks[0]);
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredOptions: any = allStacks.filter(
  //   (option) =>
  //     option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  // );

  // const handleChange = (event: any) => {
  //   setSelectedOption(
  //     filteredOptions.find((option: any) => option.value === event.target.value)
  //   );
  // };

  // const handleSearch = (event: any) => {
  //   setSearchTerm(event.target.value);
  // };
  // console.log("Print SELECTED OPTION CHANGE:", selectedOption);

  return (
    <div className="main_header">
      <>
        <div className="main_container">
          <div className="header">
            <img src={Title} alt="title" />
          </div>
          <div className="header_data">
            <NavLink className="devdata_link" to="/">
              <p className="link">Projects</p>
            </NavLink>
            <NavLink to="devdata" className="devdata_link">
              <p className="link">Developers</p>
            </NavLink>
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

            {/* <input type="text" value={searchTerm} onChange={handleSearch} />
          <select value={selectedOption.value} onChange={handleChange}>
            {filteredOptions.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select> */}
            {/* <div className="storageData">

          </div> */}
            {tagsFound ? (
              <>
                <div className="founder">
                  <p className="tags_found">{checkLocalStorage()}</p>
                  {/* Icon to clear cache */}
                  <p
                    className="clear_btn"
                    onClick={() => {
                      clearStack();
                    }}
                  >
                    {close}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="current-tags">
                  {tags.map((item, i) => {
                    return (
                      <div key={i + 1} className="tag">
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </>
      {!showPage ? (
        <></>
      ) : (
        <>
          {loader ? (
            <div className={"item"}>
              <HashLoader
                color="#f05e56"
                loading={loader}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <>
              <div className="body_tabs">
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
                    <ProjectContext.Provider value={{ projects, devs }}>
                      <ProjectCard />
                    </ProjectContext.Provider>
                  </TabPanel>
                  <TabPanel>
                    <ProjectContext.Provider value={{ projects, devs }}>
                      <Details />
                    </ProjectContext.Provider>
                  </TabPanel>
                </Tabs>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;
