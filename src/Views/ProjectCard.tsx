import { useContext } from "react";
import "./css/card.css";
import TeamMember from "./Components/TeamMember";
import { Link } from "react-router-dom";
import { ProjectContext } from "./Context";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function ProjectCard() {
  const { projects } = useContext(ProjectContext);
  // console.log("Projects on Project Card:", projects);

  return (
    <>
      <AliceCarousel
        disableButtonsControls
        autoPlay
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        controlsStrategy="responsive"
      >
        {projects.map((project: any) => {
          let team: String[] | undefined = project?.team;
          let stack: String[] | undefined = project?.tech_stack;
          let desc: String[] | undefined = project?.description;

          let trimDesc = function (string: any, length: any) {
            return string.length > length
              ? string.substring(0, length) + "..."
              : string;
          };
          return (
            <>
              <div className="card-main">
                <Link to="project">
                  <div className="more">
                    <div key={project.id}>
                      <Link to={`project/?projectId=${project.proj_name}`}>
                        <b>{project.proj_name}</b>
                        <p className="card_desc">{trimDesc(desc, 300)}</p>
                        <div className="stack_item">
                          {stack?.map((item: any) => (
                            <i>{item},</i>
                          ))}
                        </div>
                        <div className="btn-container">
                          <button>Lines of code</button>
                          <button>
                            <Link to="#">Live project</Link>
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
      </AliceCarousel>
      <br />
      <br />
    </>
  );
}

export default ProjectCard;
