import React, { useState, useContext } from "react";
import "./css/style.css";
import Title from "../assets/title.png";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {ksh} from "../icons"
import {Link} from "react-router-dom"
import axios from "axios";
// import { Context } from "./Context";


function Projects() {
const [tags, setTags] = useState<Array<string>>([]);
const [projects, setProjects] = useState<Array<any>>([]);
// const { projectData, setProjectData } = useContext(Context);

const handleStack = (e: any) => {
  e.preventDefault()
  let  tagList  =  [...tags, e.target.value ]
  if(!tags.includes(e.target.value)) {
    getData(e.target.value);
    setTags(tagList)
  }
  console.log(tags);
 }

 //Function to submit choosen stack and find
 const getData  =  async (whatStack: string) => {
  try {
    const {data} = await axios.get(`http://127.0.0.1:8000/index/projects/tags/${whatStack}`);
    setProjects([...projects, ...data]);
    console.log("Projects", projects);
    // setProjectData(projects);

  } catch (error: any) {
    console.error("Error:", error.message);
  }
 }

  return (
    <>
      <div className="header">
        <img src={Title} alt="title describe"/>
        <p style={{ color: "#fff" }}>Team and Skill Matching Engine</p>
      </div>
      <div className="search-bar">
      <form>
        <select onChange={(e) => {handleStack(e)}} >
          <option value="">Choose Stack</option>
          <option value="ReactJS">ReactJS</option>
          <option value="JavaScript">Javascript</option>
          <option value="Typescript">Typescript</option>
          <option value="Solidity">Solidity</option>
          <option value="Smart Contracts">Smart Contracts</option>
          <option value="Rust">Rust</option>
        </select>
        <button type="submit" className="select btn">Search Project</button>
        {/* Stack to search projects for */}
          <div className="current-tags">
            {tags.map((item, i) => (
              <div  key={i + 1} className="tag">
                <p>{item}</p>
              </div>
            ))}   
          </div>
        </form>
      </div>
      <Carousel className="project-cards" showStatus={false}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Carousel>
      <Link to="book-now"><button className="booking-button">Book Now</button></Link><br/><br/>
      <button className="booking-button">{ksh} Speak to dev team now</button><br/><br/>
    </>
  );
}

export default Projects;