import { useEffect, useState, useContext } from "react";
import "./css/ProjectDetail.css";
import { prev, share, ksh, verified } from "../icons";
import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png";
import linkpayui from "../assets/linkpayui.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { IProjects, ISingleDev, ProjectContext } from "./Context";
import { Config } from "../config/config";
import { ExternalLink } from "react-external-link";

function ProjectDetail() {
  // const { projects, devs } = useContext(ProjectContext);
  // console.log("PRINT DEVELOPERSS:", devs);
  // const [devs, setDevs] = useState<Array<ISingleDev>>([]);

  const [projectData, setProjectData] = useState<IProjects>();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const proj_name = urlParams.get("projectId");
  const proj_desc = urlParams.get("projectDesc");
  const proj_team = urlParams.get("projectTeam");
  let url = Config.URL;

  //Function to submit choosen stack and find resp projects
  // let stackToSearch: string;
  // const getData = async () => {
  //   const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
  //   try {
  //     const { data } = await axios.get(endpoint);
  //     setDevs([...data.dev_data]);
  //     console.log("PRINT DEV_DATA:", data);
  //   } catch (error: any) {
  //     console.error("Error:", error.message);
  //   }
  // };

  //Getting single project
  const singleProject = async () => {
    try {
      const data: any = await axios.get(`${url}/index/projects/${proj_name}`);
      setProjectData(data.data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  // console.log("Properties:", dev_data);
  let techStack: String[] | undefined = projectData?.tech_stack;
  let proj_name_get: String | undefined = projectData?.proj_name;
  let team: {}[] | undefined = projectData?.team;
  let projectId: number | undefined = projectData?._id;
  // console.log("Print project Team:", proj_team);

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
        <img src={linkPay} alt="linkpay logo" />
        <h3>{proj_name_get} </h3> {verified}
      </div>
      <div className="body_desc">
        <p>{proj_desc}</p>
        <h4>
          Dev hours &nbsp; &nbsp; <span>700+</span>
        </h4>
        <h4>
          Tech_Stack&nbsp;: &nbsp; &nbsp;{" "}
          {techStack?.map((item) => (
            <i>{item}, </i>
          ))}
        </h4>
      </div>
      <div>
        <div className="member-container">
          {team?.map((member: any) => (
            <TeamMember dev={member} />
          ))}
        </div>
        <br />
        <ExternalLink
          href="https://calendly.com/ngeni-info"
          className="btn_link"
        >
          <button className="booking-button">Book Now</button>
        </ExternalLink>
        <br />
        <br />
        <ExternalLink href="https://meet.google.com/fhu-xuhy-rzr">
          <button className="booking-button">
            {ksh} Speak to a dev team now
          </button>
        </ExternalLink>
        <br />
        <br />
      </div>
    </>
  );
}

export default ProjectDetail;
