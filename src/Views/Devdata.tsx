import "./css/devdata.css";
import { useContext } from "react";
import axios from "axios";
import { ProjectContext } from "./Context";
import { useEffect, useState } from "react";
import { Config } from "../config/config";
import HashLoader from "react-spinners/HashLoader";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import Title from "../assets/title.png";

const Devdata = () => {
  const { projects } = useContext(ProjectContext);
  const [devs, setDevs] = useState([]);
  const [loader, setLoader] = useState(true);
  const [getStacks, setGetStacks] = useState([]);
  let url = Config.URL;

  //Function to get all developers at NGeni Labs
  const devData = async () => {
    const devs: any = await axios.get(`${url}/index/devs`);
    // console.log("Developers:", devs.data);
    setDevs(devs.data);
  };

  //Function to get all stacks from all projects
  const getStack = async () => {
    const stack = await axios.get(`${url}/index/tags`);
    console.log("Stack Listed:", stack.data);
    let stacks = stack.data;
    setGetStacks(stacks);
  };

  console.log("Received Projects:", projects);

  useEffect(() => {
    devData();
  });

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
        {/* <div className="search-bar">
          <form>
            <select>
              <option>Choose Stack</option>
              {getStacks.map((item: any, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </form> */}
        {/* <div className="current-tags">
            {tags.map((item, i) => (
              <div key={i + 1} className="tag">
                <p>{item}</p>
              </div>
            ))}
          </div> */}
        {/* <i className="project_number">
            Found&nbsp;{projects.length}&nbsp;projects for stack&nbsp;{tags}
          </i> */}
        {/* </div> */}
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
