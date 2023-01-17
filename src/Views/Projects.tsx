import React, { useState } from "react";
import "./css/style.css";
import Title from "../assets/title.png";
import ProjectCard from "./ProjectCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {ksh} from "../icons"
import {Link} from "react-router-dom"

function Projects() {
  const [tags, setTags] = useState<Array<string>>([]);

const handleStack = (e:  any) => {
  // setName(stack);
  e.preventDefault()

  let  tagList  =  [...tags, e.target.value ]

  if(!tags.includes(e.target.value)) {
    setTags(tagList)
  }
  console.log(tags);
 }


  return (
    <>
      <div className="header">
        <img src={Title} alt="title describe"/>
        <p style={{ color: "#fff" }}>Team and skill matching engine</p>
      </div>
      <div className="search-bar">
        {/* <input placeholder="Search projects and teams" value={name} onChange={(e) => setName(e.target.value)} /> */}
        <select onChange={(e) => {handleStack(e)}} value={name}>
          <option value="">Choose Stack</option>
          <option value="ReactJS">ReactJS</option>
          <option value="JS">Javascript</option>
          <option value="Typescript">Typescript</option>
          <option value="Solidity">Solidity</option>
          <option value="Smart Contracts">Smart Contracts</option>
          <option value="HTML&CSS">HTML&CSS</option>
          <option value="Rust">Rust</option>
        </select>
        <button className="select btn">Search Project</button>
        <div className="current-tags">
          {tags.map((item, i) => (
            <div  key={i + 1} className="tag">
              <p>{item}</p>
            </div>
          ))}   
        </div>
      </div>
      <Carousel className="project-cards" showStatus={false}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Carousel>
      <Link to="book-now"><button className="booking-button">Book Now</button></Link><br/><br/>
      <button className="booking-button">{ksh} Speak to a dev team now</button><br/><br/>
    </>
  );
}

export default Projects;