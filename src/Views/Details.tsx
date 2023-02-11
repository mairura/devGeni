import { useContext } from "react";
import "./css/details.css";
import { teams, languages } from "../icons";
import { ProjectContext } from "./Context";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const Details = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <>
      {projects.map((project: any) => {
        let desc: string[] | undefined = project?.description;
        let team: string[] | undefined = project?.team;
        let teamNo: number | undefined = team?.length;
        let stacks: string[] | undefined = project?.tech_stack;
        let stackName: string[] | undefined = project?.tech_stack[0];
        let stackNo: number | undefined = stacks?.length;
        let projectName: string | undefined = project?.proj_name;

        //Trim project description
        let trimDesc = function (string: any, length: any) {
          return string.length > length
            ? string.substring(0, length) + "..."
            : string;
        };
        return (
          <Link
            to={`project/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
            className="details_container"
          >
            <div className="details_projects">
              <div className="details_project">
                <h3>{trimDesc(projectName, 100)}</h3>
                <p>{trimDesc(desc, 150)}</p>
                <div className="project_stack">
                  <div>
                    <span>{teams}</span>
                  </div>
                  <div>
                    <p>{teamNo}</p>
                  </div>
                  <div>
                    <span>{languages}</span>
                  </div>
                  <div>
                    <p>{stackName}</p>
                  </div>
                  <div>
                    <p>+&nbsp;{stackNo}&nbsp;more</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Details;
