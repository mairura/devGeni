import { useContext } from "react";
import "./css/card.css";
// import lalo from "../assets/lalo.png";
import TeamMember from "./Components/TeamMember";
import { Link } from "react-router-dom";
// import axios from "axios";
import { ProjectContext } from "./Context";

function ProjectCard() {
  const { projects } = useContext(ProjectContext);

  return (
    <>
      <div className="card-main">
        {/* <Link to="project">      */}
        <div className="more">
          <div className="btn-container">
            {projects.map((project: any) => (
              <div key={project.id}>
                <Link to={`project/?projectId=${project.proj_name}`}>
                  <p>{project.proj_name}</p>
                </Link>
              </div>
            ))}
            <button>Lines of code</button>
            <button>live project</button>
          </div>
        </div>
        {/* </Link> */}
      </div>

      <br />
      <br />
      <TeamMember />
    </>
  );
}

export default ProjectCard;
