import { useContext } from "react";
import "./css/card.css";
import TeamMember from "./Components/TeamMember";
import { Link } from "react-router-dom";
import { ProjectContext } from "./Context";
import { Carousel } from "react-responsive-carousel";

function ProjectCard() {
  const { projects } = useContext(ProjectContext);

  return (
    <>
      <Carousel className="project-cards" showStatus={false}>
        {projects.map((project: any) => {
          let team: String[] | undefined = project?.team;
          return (
            <>
              <div className="card-main">
                <Link to="project">
                  <div className="more">
                    <div key={project.id}>
                      <Link to={`project/?projectId=${project.proj_name}`}>
                        <b>{project.proj_name}</b>
                        <p>{project.description}</p>
                        <div className="btn-container">
                          <button>Lines of code</button>
                          <button>
                            <Link to="">live project</Link>
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="member-container">
                {team?.map((member) => (
                  <TeamMember dev_name={member} />
                ))}
              </div>
            </>
          );
        })}
      </Carousel>
      <br />
      <br />
    </>
  );
}

export default ProjectCard;
