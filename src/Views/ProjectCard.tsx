import React, { useContext, useState } from "react";
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
        {projects.map((project: any) => (
          <>
            <div className="card-main">
              <Link to="project">
                <div className="more">
                  <div key={project.id}>
                    <Link to={`project/?projectId=${project.proj_name}`}>
                      <p>{project.proj_name}</p>
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
            <TeamMember />
          </>
        ))}
      </Carousel>
      <br />
      <br />
    </>
  );
}

export default ProjectCard;
