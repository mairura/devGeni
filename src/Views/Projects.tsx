import { useEffect, useState } from "react";
import "./css/style.css";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import close from "../assets/close .svg";
import axios from "axios";
import { ProjectContext, IProjects, ISingleDev } from "./Context";
import { Config } from "../config/config";
import { Tabs, TabPanel, Tab, TabList } from "react-tabs";
import HashLoader from "react-spinners/HashLoader";
import TeamMember from "./Components/TeamMember";

function Projects() {
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [getStacks, setGetStacks] = useState([]);
  const [localData, setLocalData] = useState<Array<string>>([]);

  //For our dropdown suggestion
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  let url = Config.URL;

  //Function to handle selected stack to be called
  const handleStack = (e: any) => {
    e.preventDefault();
    let tagList: any = [...localData, e.target.value];
    if (!localData.includes(e.target.value)) {
      setLocalData(tagList);
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
    setTimeout(() => setLoader(false), 1000);
  }, []);

  useEffect(() => {
    getStack();

    let tagsNewLocal: string | null = localStorage.getItem("dataTags");
    if (tagsNewLocal !== null) {
      getData(tagsNewLocal);
    }
  }, []);

  // Function to clear stack in localStorage
  const clearStack = () => {
    localStorage.clear();
    setShowPage(false);
    setLocalData([]);
  };

  const SplitNames = (names: string) => {
    const names_split = names.split(",");
    return names_split;
  };

  function checkLocalStorage() {
    if (!localStorage.length) {
      return null;
    } else {
      let tag_string: string | null = localStorage.getItem("dataTags");
      let results: any;
      if (tag_string != null) {
        results = SplitNames(tag_string);
        setLocalData(results);
      }
      return results;
    }
  }
  const TagsIdentified: any = () => {
    if (localData !== undefined) {
      return (
        <div className="current-tags">
          {localData.map((item: any) => {
            return <p className="tag">{item}</p>;
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <div className="main_header">
      <>
        <div className="main_container">
          <div className="search-bar">
            <div className="select1">
              {/* <label htmlFor="browser">Completed Projects</label>
              <input
                list="getStacks"
                name="browser"
                id="browser"
                value={inputValue}
                onChange={handleInputChange}
              />
              <datalist id="browsers">
                {getStacks
                  .filter((browser: any) =>
                    browser.toLowerCase().startsWith(inputValue.toLowerCase())
                  )
                  .map((browser: any) => (
                    <option value={browser} />
                  ))}
              </datalist> */}
              <select
                onChange={(e) => {
                  handleStack(e);
                }}
                className="mySelectArrow1"
              >
                <option>View Projects</option>
                {getStacks.map((item: any, index) => (
                  <option key={index} value={item.name} className="all_items1">
                    <div>{item.name}</div>
                  </option>
                ))}
              </select>
            </div>
            <>
              <div className="founder">
                <div className="tags_found">
                  <TagsIdentified />
                  <p className="clear_btn" onClick={clearStack}>
                    <img src={close} alt="close" />
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>
      </>
      {!showPage ? (
        <></>
      ) : (
        <>
          {loader ? (
            <div className="item">
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
              <div>
                <ProjectContext.Provider value={{ projects, devs }}>
                  <ProjectCard />
                </ProjectContext.Provider>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Projects;
