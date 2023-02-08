import { useContext } from "react";
import "./css/card.css";
import TeamMember from "./Components/TeamMember";
import { Link } from "react-router-dom";
import { ProjectContext } from "./Context";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css/style.css";
import { ExternalLink } from "react-external-link";
import { ksh } from "../icons";

function ProjectCard() {
  const { projects, devs } = useContext(ProjectContext);
  const dev_data = devs;
  console.log("Get ALL PROJECTS DATA:", projects);

  return (
    <>
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
            let team: {}[] | undefined = project?.team;
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
                        <Link
                          to={`project/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
                        >
                          <b style={{ textAlign: "left" }}>
                            {trimDesc(proj_title, 20)}
                          </b>
                          <p
                            className="card_desc"
                            style={{ width: "100%", textAlign: "left" }}
                          >
                            {trimDesc(desc, 150)}
                          </p>
                          <div className="rate">
                            <span style={{ width: "100%", textAlign: "left" }}>
                              {match_rate}% &nbsp; Search Relevance
                            </span>
                          </div>
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
              </>
            );
          })}
        </AliceCarousel>
        <div className="member-container">
          {/* <ProjectContext.Provider value={{ projects, devs }}> */}
          {dev_data?.map((member: any) => (
            <TeamMember dev={member} />
          ))}
          {/* </ProjectContext.Provider> */}
        </div>
        <div className="buttons">
          <ExternalLink
            href="https://calendly.com/ngeni-info"
            className="btn_link"
          >
            <button className="booking-button">Book Now</button>
          </ExternalLink>
          <button className="booking-button">{ksh} Speak Now</button>
        </div>
      </>
    </>
  );
}

export default ProjectCard;
