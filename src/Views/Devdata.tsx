import "./css/devdata.css";
import Title from "../assets/title.png";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Config } from "../config/config";
import HashLoader from "react-spinners/HashLoader";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { ProjectContext, IProjects } from "./Context";

const Devdata = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  // const { projects } = useContext(ProjectContext);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState([]);
  const [getStacks, setGetStacks] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  let url = Config.URL;

  //Function to get all developers at NGeni Labs
  const devData = async () => {
    const devs: any = await axios.get(`${url}/index/devs`);
    // console.log("Developers:", devs.data);
    setDevs(devs.data);
  };

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

  // console.log("Names:", devs);

  useEffect(() => {
    devData();
  });

  useEffect(() => {
    getStack();
  }, []);

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);

  return (
    <>
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
            Found&nbsp;{projects.length}&nbsp;developer(s) with stack&nbsp;{tags}
          </i>
        </div>
      </>
      {loader ? (
        <div className="item">
          <HashLoader
            color="#f05e56"
            loading={loader}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {devs.map((dev: any) => {
            let name = dev.name;
            let shortName = dev.short_name;
            let pic = dev.profile_img_link;
            let gitLink = dev.profile_link;
            let stack_name = dev.tech_stack;

            return (
              <div className="devdata_container">
                <div className="devdata_details">
                  <div className="devdata_image">
                    <img src={pic} />
                  </div>
                  <div className="devdata_name">
                    <h3>
                      {name}&nbsp;<span>({shortName})</span>
                    </h3>
                    <p>Stack will display here:{stack_name}</p>
                    <i>{gitLink}</i>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Devdata;
