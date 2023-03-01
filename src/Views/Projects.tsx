import { useEffect, useState } from "react";
import "./css/style.css";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import axios from "axios";
import { ProjectContext, IProjects, ISingleDev, IParams } from "./Context";
import { Config } from "../config/config";
import HashLoader from "react-spinners/HashLoader";
import TopBar from "./Components/TopBar";
// import "react-modern-drawer/dist/index.css";

function Projects() {
  let url = Config.URL;
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);
  const [params, setParams] = useState<Array<IParams>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [inputValue, setInputValue] = useState("");
  // const [getStacks, setGetStacks] = useState([]);
  // const [localData, setLocalData] = useState<Array<string>>([]);
  // const [numProjects, setNumProjects] = useState(0);

  // const [description, setDescription] = useState("");

  const requests = ["I want...", "Design me a...", "Build me an app..."];

  const handleClick = (request: any) => {
    setInputValue(request);
  };

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  //Function takes in user description
  const handleAPICall = () => {
    setShowPage(false);
    const endpoint: string = `${url}/index/search_projects`;
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        let data_length = data.length;
        setProjects(data.projects_data);
        setDevs(data.dev_data);
        console.log("Print Params:", data.projects_data.length);
        setParams(data.params);
        // window.localStorage.setItem("dataTags", newData);
        setShowPage(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //Function to handle selected stack to be called
  // const handleStack = (e: any) => {
  //   e.preventDefault();
  //   let tagList: any = [...localData, e.target.value];
  //   if (!localData.includes(e.target.value)) {
  //     setLocalData(tagList);
  //     let newList: string = tagList.join();
  //     window.localStorage.setItem("dataTags", newList);
  //     getData(newList);
  //   }
  // };

  //Function to submit choosen stack and find resp projects
  // const getData = async (stackToSearch: string) => {
  //   setShowPage(false);
  //   const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
  //   try {
  //     const { data } = await axios.get(endpoint);
  //     setDevs([...data.dev_data]);
  //   } catch (error: any) {
  //     console.error("Error:", error.message);
  //   }
  // };

  //Function to get all stacks from all projects
  // const getStack = async () => {
  //   const stack = await axios.get(`${url}/index/tags`);
  //   let stacks = stack.data;
  //   setGetStacks(stacks);
  // };

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);

  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //   let tagsNewLocal: string | null = localStorage.getItem("dataTags");
  //   if (tagsNewLocal !== null) {
  //     setDescription(tagsNewLocal);
  //   }
  // }, []);

  // Function to clear stack in localStorage
  // const clearStack = () => {
  //   localStorage.clear();
  //   setShowPage(false);
  //   setLocalData([]);
  // };

  // const SplitNames = (names: string) => {
  //   const names_split = names.split(",");
  //   return names_split;
  // };

  // function checkLocalStorage() {
  //   if (!localStorage.length) {
  //     return null;
  //   } else {
  //     let tag_string: string | null = localStorage.getItem("dataTags");
  //     let results: any;
  //     if (tag_string != null) {
  //       results = SplitNames(tag_string);
  //       setLocalData(results);
  //     }
  //     return results;
  //   }
  // }
  // const TagsIdentified: any = () => {
  //   if (localData !== undefined) {
  //     return (
  //       <div className="current-tags">
  //         {localData.map((item: any) => {
  //           return <p className="tag">{item}</p>;
  //         })}
  //       </div>
  //     );
  //   }
  //   <Link to="/" className="options1">
  //     {prev}
  //   </Link>;
  // };

  // useEffect(() => {
  //   checkLocalStorage();
  // }, []);

  return (
    <div className="main_header">
      <>
        <div className="main_container">
          <div className="search-bar">
            <TopBar />
            <div className="main_search">
              <p>What would you like to do?</p>
              <div className="main_request">
                {requests.map((request: any, index: any) => {
                  return (
                    <button key={index} onClick={() => handleClick(request)}>
                      {request}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="select1">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="searchBox"
              />
              <button onClick={handleAPICall} className="btnSearch">
                Go
              </button>
            </div>
            <>
              <div className="tagBox">
                <div className="tag_box">
                  <p>Choose from Tags</p>
                  <div className="tag_boxData">
                    {params.map((param: any) => {
                      return <p>{param}</p>;
                    })}
                  </div>
                </div>
              </div>
              <div></div>
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
                <ProjectContext.Provider value={{ projects, devs, params }}>
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
