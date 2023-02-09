import "./css/devdata.css";
import Title from "../assets/title.png";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Config } from "../config/config";
import HashLoader from "react-spinners/HashLoader";
import { Link, NavLink } from "react-router-dom";
import { IProjects } from "./Context";
import { ExternalLink } from "react-external-link";

const Devdata = () => {
  const [tags, setTags] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [devs, setDevs] = useState([]);
  const [getStacks, setGetStacks] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const [loader, setLoader] = useState(true);
  let url = Config.URL;

  //Function to get all developers at NGeni Labs
  const devData = async () => {
    const devs: any = await axios.get(`${url}/index/devs`);
    setDevs(devs.data);
  };

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
    devData();
  }, []);

  useEffect(() => {
    getStack();
  }, []);

  useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);

  let trimDesc = function (string: any, length: any) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  return (
    <>
      <>
        <div>
          <div className="header">
            <img src={Title} alt="title describe" />
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
            {tags.map((item, i) => (
              <div key={i + 1} className="tag">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </>
      <div className="devdata_list">
        {loader ? (
          <div className="item">
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
            {devs.map((dev: any) => {
              let name = dev.name;
              let shortName = dev.short_name;
              let pic = dev.profile_img_link;
              let gitLink: any = dev.profile_link;
              let stack_name = dev.tech_stack;
              let stackName = stack_name.join();

              return (
                <>
                  <ExternalLink href={gitLink} className="link">
                    <div className="devdata_container">
                      <div className="devdata_details">
                        <div className="devdata_image">
                          <img src={pic} />
                        </div>
                        <div className="devdata_name">
                          <h3>
                            {name}&nbsp;<span>({shortName})</span>
                          </h3>
                          <p>{trimDesc(stackName, 100)}</p>
                        </div>
                      </div>
                    </div>
                  </ExternalLink>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Devdata;
