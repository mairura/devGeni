import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import close from "../assets/close.svg";
// import axios from "axios";
import { ProjectContext, IProjects, ISingleDev } from "./Context";
import { Config } from "../config/config";
import HashLoader from "react-spinners/HashLoader";
import { prev } from "../icons";
import Logo from "../assets/Logo.png";
import Hambuger from "../assets/ham.svg";
// import "react-modern-drawer/dist/index.css";
import ContactUs from "./Components/ContactUs";

function Projects() {
  let url = Config.URL;
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  const [getStacks, setGetStacks] = useState([]);
  const [localData, setLocalData] = useState<Array<string>>([]);

  const [description, setDescription] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (event: any) => {
    setDescription(event.target.value);
  };

  //Function takes in user description
  const handleAPICall = () => {
    setShowPage(false);
    const endpoint: string = `${url}/index/search_projects`;
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: description }),
    })
      .then((response) => response.json())
      .then((data) => {
        let newData = data.projects_data;
        setProjects(data.projects_data);
        setDevs(data.dev_data);
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
            <div className="search_barTop">
              <div>
                <Link to="/" className="options1">
                  {prev}
                </Link>
              </div>

              <div className="top_logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="hambuger">
                {isOpen ? (
                  <img src={close} alt="close" onClick={() => isOpen} />
                ) : (
                  <img
                    src={Hambuger}
                    alt="logo"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </div>
            {isOpen && <ContactUs />}
            <div className="searchTitle">
              <p>Project highlights and dev team</p>
            </div>
            <div className="select1">
              <input
                type="text"
                value={description}
                onChange={handleInput}
                className="searchBox"
              />
              <button onClick={handleAPICall} className="btnSearch">
                Search
              </button>
            </div>
            <>
              {/* <div className="founder">
                <div className="tags_found">
                  <TagsIdentified />
                  <p className="clear_btn" onClick={clearStack}>
                    <img src={close} alt="close" />
                  </p>
                </div>
              </div> */}
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
