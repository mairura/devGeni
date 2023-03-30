import "./css/devdata.css";
import close from "../assets/close.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Config } from "../config/config";
import HashLoader from "react-spinners/HashLoader";
import { NavLink } from "react-router-dom";
import { ISingleDev } from "./Context";
import { ExternalLink } from "react-external-link";

const Devdata = () => {
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);

  const [getStacks, setGetStacks] = useState([]);
  const [loader, setLoader] = useState(true);
  const [localData, setLocalData] = useState<Array<string>>([]);
  let url = Config.URL;

  //Function to handle selected stack to be called
  const handleStack = (e: any) => {
    e.preventDefault();
    let tagList: any = [...localData, e.target.value];
    if (!localData.includes(e.target.value)) {
      setLocalData(tagList);
      let newList: string = tagList.join();
      localStorage.setItem("dataTags", newList);
      getData(newList);
    }
  };

  //Function to submit choosen stack and find resp projects
  const getData = async (stackToSearch: string) => {
    let endpoint: string;
    if (!localStorage.length) {
      endpoint = `${url}/index/devs`;
    } else {
      endpoint = `${url}/index/devs/tags/${stackToSearch}`;
    }
    try {
      const { data } = await axios.get(endpoint);
      setDevs([...data]);
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
    getStack();

    let tagsNewLocal: string | null = localStorage.getItem("dataTags");
    if (tagsNewLocal !== null) {
      getData(tagsNewLocal);
    }
  }, []);

  //Function to clear stack in localStorage
  const clearStack = () => {
    localStorage.clear();
    setLocalData([]);
    setDevs([]);
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
          {localData.map((item: any, index: any) => {
            return <p className="tag" key={index}>{item}</p>;
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    checkLocalStorage();
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
      <div>
        <div className="header">
          <h3>DEVGENI</h3>
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
            {getStacks.map((item: any, index: any) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}<div>
            <div className="header">
              <h3>DEVGENI</h3>
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
              <div className="tags_found">
                <TagsIdentified />
                <p className="clear_btn" onClick={clearStack}>
                  <img src={close} alt="close" />
                </p>
              </div>
            </div>
          </div>
          </select>
        </form>
        <div className="current-tags">
          <div className="tags_found">
            <TagsIdentified />
            <p className="clear_btn" onClick={clearStack}>
              <img src={close} alt="close" />
            </p>
          </div>
        </div>
      </div>
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
                          <img src={pic} alt="pic" />
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
