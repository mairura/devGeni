import { useContext, useState } from "react";
import "./css/card.css";
import TeamMember from "./Components/TeamMember";
import { Link } from "react-router-dom";
import { ProjectContext } from "./Context";
import "./css/style.css";
import linkPay from "../assets/linkpay.png";
import { languages, teams } from "../icons";
// import axios from "axios";
import { Config } from "../config/config";
import { motion } from "framer-motion";
// import { ExternalLink } from "react-external-link";
// import { ksh } from "../icons";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    transition: { ease: "easeInOut" },
  },
};

function ProjectCard() {
  const { projects, devs } = useContext(ProjectContext);
  const dev_data = devs;
  const dev_length = dev_data.length;
  const dev_dataSlice = dev_data.slice(0, 3).length;
  const diff = dev_length - dev_dataSlice;

  let url = Config.URL;

  return (
    <>
      <div
        style={{
          marginTop: "200px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {projects.map((project: any) => {
          let team: {}[] | undefined = project?.team;
          let stack: String[] | undefined = project?.tech_stack;
          let desc: String[] | undefined = project?.description;
          let match_rate: string | undefined = project?.match_rate;
          let proj_title: string | undefined = project?.proj_name;
          let teamLength: number | undefined = team?.length;
          let stackLength: number | undefined = stack?.length;
          let splitStack: string | undefined = stack?.join();
          // console.log("PRINT PROJECTS DEVELOPERS BY TAGS", splitStack);

          let trimDesc = function (string: any, length: any) {
            return string.length > length
              ? string.substring(0, length) + "..."
              : string;
          };

          return (
            <>
              <motion.div
                className="card-main"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.03, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <Link
                  to={`/projectDetails/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
                >
                  <div className="more">
                    <div key={project.id}>
                      <Link
                        to={`/projectDetails/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
                      >
                        <div>
                          <p className="card_devs">
                            {dev_data?.slice(0, 3).map((member: any) => (
                              <TeamMember dev={member} className="developer" />
                            ))}
                            {/* <span className="main-member">+{diff}</span> */}
                          </p>
                        </div>
                        <div className="card_details">
                          <motion.p
                            className="card_title"
                            whileHover={{
                              scale: 1.05,
                              originX: 0,
                              color: "#52f2e2",
                            }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            <img
                              src={linkPay}
                              alt="linkpay logo"
                              style={{
                                textAlign: "left",
                                height: 15,
                                paddingRight: 4,
                              }}
                            />
                            {trimDesc(proj_title, 15)}
                          </motion.p>
                          <p className="card_desc">{trimDesc(desc, 150)}</p>
                          <div className="rate">
                            <span
                              className="lengths"
                              style={{
                                fontSize: 8,
                                paddingTop: 7,
                                color: "#fff",
                                paddingRight: 10,
                              }}
                            >
                              {match_rate}%{" "}
                            </span>
                            <span>{teams}</span>
                            <p className="lengths">{teamLength}</p>
                            <span>{languages}</span>
                            <p className="lengths">{stackLength}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
