import { useContext } from "react";
import "./css/card.css";
import TeamMember from "./Components/TeamMember";
import { Link } from "react-router-dom";
import { ProjectContext } from "./Context";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/style.css";

function ProjectCard() {
  const { projects } = useContext(ProjectContext);
  // console.log("Projects:", projects);

  //Finish up on this
  let projectStorage = JSON.stringify(projects);
  console.log("Storage data in JSON:", projectStorage);
  localStorage.setItem("projectStorage", projectStorage);

  let getData: any = localStorage.getItem("projectStorage");
  let getDataStorage = JSON.parse(getData);
  console.log("Get data from storage:", getDataStorage);

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
          let match_rate: string | undefined = project?.match_rate;
          let proj_title: string | undefined = project?.proj_name;

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
                      <div className="rate">
                        <span>{match_rate}% &nbsp; Relevant</span>
                      </div>

                      <Link to={`project/?projectId=${project._id}`}>
                        <b>{trimDesc(proj_title, 20)}</b>

                        <p className="card_desc">{trimDesc(desc, 150)}</p>
                        <div className="stack_item">
                          {stack?.map((item: any, i: any) => {
                            while (i < 5) {
                              return <i>{item},</i>;
                            }
                          })}
                        </div>
                        <div className="btn-container">
                          <button>Code</button>
                          <button>
                            <Link to="#">Live</Link>
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
