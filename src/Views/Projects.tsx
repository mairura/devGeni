import { useEffect, useState } from "react";
import "./css/style.css";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ProjectContext, IProjects, ISingleDev, IParams } from "./Context";
import { Config } from "../config/config";
import TopBar from "./Components/TopBar";

function Projects() {
  let url = Config.URL;
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);
  const [params, setParams] = useState<Array<IParams>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [numProjects, setNumProjects] = useState("0");

  // const [description, setDescription] = useState("");

  const requests = ["I want...", "Design me a...", "Build me a mobile app..."];

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
        console.log("Print Params:", data.projects_data);
        setNumProjects(data.projects_data.length);
        setParams(data.params);
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

  return (
    <div className="main_header">
      <>
        <div className="main_container">
          <div className="search-bar">
            <TopBar />
            <div className="tag_boxData">
                    {params.map((param: any) => {
                      return <p>{param}</p>;
                    })}
                  </div>
            {/* <div className="main_search">
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
                  
                </div>
              </div> */}
              <div className="matchRateData">
                <p>We found {numProjects} projects matching your search</p>
              </div>
            {/* </> */}
          </div>
        </div>
      </>
      {!showPage ? (
        <>
          {/* To-do */}
          {/* Design the logo animation */}
          <div className="item">Fetching...</div>
        </>
      ) : (
        <>
          {loader ? (
            <div className="item">Loading...</div>
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
