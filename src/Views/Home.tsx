import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Config } from "../config/config";
import "./css/home.css";

const Home = () => {
  const [localData, setLocalData] = useState<Array<string>>([]);
  const [getStacks, setGetStacks] = useState([]);

  let url = Config.URL;

  // Function to get all stacks from all projects
  const getStack = async () => {
    const stack = await axios.get(`${url}/index/tags`);
    let stacks = stack.data;
    setGetStacks(stacks);
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

  useEffect(() => {
    getStack();
  }, []);

  useEffect(() => {
    checkLocalStorage();
  }, []);

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

  return (
    <div className="home_container">
      <div className="home_header">
        <p>DEVGENI</p>
      </div>
      <div className="gradient" />
      <div className="select">
        {/* <form> */}
        <select className="mySelectArrow">
          <option>View Projects</option>
          {getStacks.map((item: any, index) => (
            <option key={index} value={item.name} className="all_items">
              <div>{item.name}</div>
            </option>
          ))}
        </select>
        {/* </form> */}
        <div className="founder">
          <div className="tags_found">
            <TagsIdentified />
          </div>
        </div>
      </div>
      <Link to="/projects">
        <div className="home_btn">
          <button>Explore</button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
