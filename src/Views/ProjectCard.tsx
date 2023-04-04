import "./css/style.css";
import "./css/card.css";
import "./css/home.css"
import linkPay from "../assets/linkpay.png";
import { languages, teams } from "../icons";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import TopBar from "./Components/TopBar";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect, CSSProperties } from "react";
import { Config } from "../config/config";
import axios from "axios";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

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

let url = Config.URL;
const endpoint: string = `${url}/index/search_projects`;


function ProjectCard(props: any) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<any[]>([]);

  const location = useLocation();
  const tags = location.state.tags // Access tags from the search page
  const querryTags = tags.join(" ")

  axios.post(endpoint, { description: querryTags }).then(
    (response) => {
      const projects = response.data.projects_data
      console.log(projects)
      setProjects(projects)
    }
  ).catch((error) => {
    console.error(error.message);
  })

  // let projects_only: any[] = []
  // if (localStorage.getItem('data_projects_searched')) {
  //   const data_projects_searched: any = localStorage.getItem('data_projects_searched')
  //   projects_only = JSON.parse(data_projects_searched).projects_data
  // }
  // const projectLength = projects_only.length;


  // let params_only: any[] = []
  // if (localStorage.getItem('dataParams')) {
  //   const dataParams: any = localStorage.getItem('dataParams')
  //   params_only = JSON.parse(dataParams);
  // }
  // console.log("Print All Projects Data", params_only)

  useEffect(() => {
    console.log(projects, projects.length)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 3000);
  })



  return (
    <>
      {projects.length < 1 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              backgroundColor: " #031926",
            }}
          >
            <HashLoader
              color="#52f2e2"
              cssOverride={override}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) :
        (
          <>
            <div
              style={{
                marginTop: "250px",
                display: "grid",
                gridTemplateColumns: "1fr",
              }}
            >
              {projects.map((project: any, index: any) => {
                let team: {}[] | undefined = project?.team;
                let stack: String[] | undefined = project?.tech_stack;
                let desc: String[] | undefined = project?.description;
                let match_rate: string | undefined = project?.match_rate;
                let proj_title: string | undefined = project?.proj_name;
                let teamLength: number | undefined = team?.length;
                let stackLength: number | undefined = stack?.length;

                let trimDesc = function (string: any, length: any) {
                  return string.length > length
                    ? string.substring(0, length) + "..."
                    : string;
                };

                return (
                  <>
                    <div className="main_container" key={index}>
                      <div className="search-bar">
                        <TopBar />
                        <div className="tag_boxData">
                          {projects.map((param: any, project_index: any) => {
                            console.log("index", index)
                            return <p key={index} style={{ color: "white" }}>{param}</p>;
                          })}
                        </div>
                        <div className="matchRateData">
                          <p>We found {projects.length} projects matching your search</p>
                        </div>
                      </div>
                    </div>
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
                                    height: 20,
                                    paddingRight: 4,
                                    paddingBottom: 2,
                                  }}
                                />
                                {trimDesc(proj_title, 50)}
                              </motion.p>
                              <p className="card_desc">{desc}</p>
                              <div className="rate">
                                <span
                                  className="lengths"
                                  style={{
                                    fontSize: 10,
                                    paddingTop: 10,
                                    color: "#fff",
                                    paddingRight: 10,
                                  }}
                                >
                                  {match_rate}%{" "}match rate
                                </span>
                                <div className="teamLanguages">
                                  <span>{teams}</span>
                                  <p className="lengths">{teamLength}</p>
                                  <span>{languages}</span>
                                  <p className="lengths">{stackLength}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </>
                );
              })}
            </div>
          </>
        )}

    </>
  );
}

export default ProjectCard;
