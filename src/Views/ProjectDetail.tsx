import React from "react";
import "./css/Detail.css";
import { prev, share, ksh, verified } from "../icons";
import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png";
import linkpayui from "../assets/linkpayui.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function ProjectDetail() {
  const location = useLocation();
  const { description, team, techStack, projectName } = location.state;

  //Getting single project
  const singleProject = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/index/projects/:proj_name"
      );
      console.log("Single Project Data:", data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="project_banner">
        <div className="options">
          <Link to="/">{prev}</Link> {share}
        </div>
        <div className="preview_container">
          <img src={linkpayui} alt="linkpay ui" />
        </div>
      </div>
      <div className="title_desc">
        <img src={linkPay} alt="linkpay logo" /> <h3> &nbsp; {projectName}</h3>{" "}
        {verified}
      </div>
      <div className="body_desc">
        <p>{description}</p>
        <h4>
          Dev hours &nbsp; &nbsp; <span>700+</span>
        </h4>
        <h4>
          Tech_Stack &nbsp; &nbsp; <span></span>
          {techStack}
        </h4>
        <button onClick={singleProject}>Get Project</button>
      </div>
      <div>
        {/* <h3 style={{color:"#fff"}}>team</h3> */}
        <TeamMember />
        <br />
        <Link to="book-now">
          <button className="booking-button">Book Now</button>
        </Link>
        <br />
        <br />
        <button className="booking-button">
          {ksh} Speak to a dev team now
        </button>
        <br />
        <br />
      </div>
    </>
  );
}

export default ProjectDetail;
