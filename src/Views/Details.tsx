import { useContext } from "react";
import "./css/details.css";
import { greater, team, stack } from "../icons";
import { ProjectContext } from "./Context";
import "react-tabs/style/react-tabs.css";

const Details = () => {
  const { projects } = useContext(ProjectContext);
  // console.log("Projects on New Page:", projects);

  return (
    <>
      {projects.map((project: any) => {
        let desc: String[] | undefined = project?.description;
        let teams: String[] | undefined = project?.team;
        let teamNo: number | undefined = teams?.length;
        let stacks: String[] | undefined = project?.tech_stack;
        let stackNo: number | undefined = stacks?.length;
        console.log("Descrp:", project.description);

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
                  <p>{team}</p>
                </div>
                <div>
                  <p>{teamNo}</p>
                </div>
                <div>
                  <p>{stack}</p>
                </div>
                <div>
                  <p>{stackNo}</p>
                </div>
                <div>
                  <p>+&nbsp;{}&nbsp;more</p>
                </div>
                <div className="greater">
                  <p>{greater}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Details;
