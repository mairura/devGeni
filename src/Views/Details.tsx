import { useContext } from "react";
// import { Link } from "react-router-dom";
import "./css/details.css";
import { greater, team, stack } from "../icons";
import { ProjectContext } from "./Context";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const Details = () => {
  const { projects } = useContext(ProjectContext);
  // console.log("Projects on New Page:", projects);

  return (
    <>
      {projects.map((project: any) => {
        let desc: string[] | undefined = project?.description;
        let teams: string[] | undefined = project?.team;
        let teamNo: number | undefined = teams?.length;
        let stacks: string[] | undefined = project?.tech_stack;
        let stackName: string[] | undefined = project?.tech_stack[0];
        let stackNo: number | undefined = stacks?.length;
        // console.log("Descrp:", project.description);

        //Trim project description
        let trimDesc = function (string: any, length: any) {
          return string.length > length
            ? string.substring(0, length) + "..."
            : string;
        };
        return (
          <div className="details_container">
            <div className="details_projects">
              <div className="details_project">
                <h3>{project.proj_name}</h3>
                <p>{trimDesc(desc, 300)}</p>
              </div>
              <div className="project_stack">
                <div>
                  <span className="image">{team}</span>
                </div>
                <div>
                  <p>{teamNo}</p>
                </div>
                <div>
                  <span className="image1">{stack}</span>
                </div>
                <div>
                  <p>{stackName}</p>
                </div>
                <div>
                  <p>+&nbsp;{stackNo}&nbsp;more</p>
                </div>
                <Link to="project">
                  <span className="greater">{greater}</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Details;
