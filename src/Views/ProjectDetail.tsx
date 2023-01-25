import React, { useEffect, useState } from "react";
import "./css/ProjectDetail.css";
import { prev, share, ksh, verified } from "../icons";
import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png";
import linkpayui from "../assets/linkpayui.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { IProjects } from "./Context";
import { Config } from "../config/config";

function ProjectDetail() {
  const [projectData, setProjectData] = useState<IProjects>();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const proj_name = urlParams.get("projectId");
  let url = Config.URL;
  console.log("Config File:", url);

  //Getting single project
  const singleProject = async () => {
    try {
      const data: any = await axios.get(`${url}/index/projects/${proj_name}`);
      // console.log("Single Project Data:", data);
      setProjectData(data.data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  console.log("Properties:", projectData);
  let techStack: String[] | undefined = projectData?.tech_stack;
  let team: String[] | undefined = projectData?.team;

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
        <p>{projectData?.description}</p>
        <h4>
          Dev hours &nbsp; &nbsp; <span>700+</span>
        </h4>
        <h4>
          Tech_Stack &nbsp; &nbsp;{" "}
          <span>
            {techStack?.map((item) => (
              <>{item}, </>
            ))}
          </span>
        </h4>
      </div>
      <div>
        {/* <h3 style={{color:"#fff"}}>team</h3> */}
        <div className="member-container">
          {team?.map((member) => (
            <TeamMember dev_name={member} />
          ))}
        </div>
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
