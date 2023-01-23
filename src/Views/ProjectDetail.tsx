import React, { useEffect, useState } from "react";
import "./css/Detail.css";
import { prev, share, ksh, verified } from "../icons";
import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png";
import linkpayui from "../assets/linkpayui.png";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectDetail() {
  const [projectData, setProjectData] = useState({});
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const proj_name = urlParams.get("projectId");
  // const description = urlParams.get("description");

  //Getting single project
  const singleProject = async () => {
    try {
      const data: any = await axios.get(
        `http://127.0.0.1:8000/index/projects/${proj_name}`
      );
      console.log("Single Project Data:", data);
      setProjectData(data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  console.log(projectData);

  useEffect(() => {
    singleProject();
  }, []);

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
        <img src={linkPay} alt="linkpay logo" /> <h3>{proj_name} </h3>{" "}
        {verified}
      </div>
      <div className="body_desc">
        <p></p>
        <h4>
          Dev hours &nbsp; &nbsp; <span>700+</span>
        </h4>
        <h4>
          Tech_Stack &nbsp; &nbsp; <span>{}</span>
        </h4>
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
