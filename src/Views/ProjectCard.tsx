import "./css/style.css";
import "./css/card.css";
import "./css/home.css";
import "./css/Member.css";
import linkPay from "../assets/linkpay.png";
import { languages, teams } from "../icons";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Config } from "../config/config";
import axios from "axios";
import loader from "../assets/logo 200.gif";
import dev1 from "../assets/dev1.jpeg";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.jpeg";

const devProfiles = [
  {
    image: dev1,
  },
  {
    image: dev3,
  },
  {
    image: dev4,
  },
];

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
  const [projects, setProjects] = useState<any[]>([]);
  const [devProfile, setDevProfile] = useState<any>()

  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state; // Access tags from the search page

  // TODO: Display the tags provided did not yield any results, provide a link to the search page
  if (!state || !state.tags || state.tags.length < 1) {
    window.location.replace("/allprojects");
  }

  const tags = state.tags;

  const fetchProjects = useCallback(async () => {
    axios
      .post(endpoint, { description: tags })
      .then(({ data }) => {

        console.log("data", data.projects)
        setProjects(data.projects);

        const alldevs: string[] = []

        data.projects.map((project: any) => {
          project.team.map((dev: any) => {
            if (!alldevs.includes(dev)) {
              alldevs.push(dev)
            }
          })
        })

        // Save all devs queried, this is later passed to the project details page
        // setDevs(alldevs)

        fetchDevProfilePhotos(alldevs)
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const fetchDevProfilePhotos = async (alldevs: any) => {
    await axios.post(`${url}/index/devs/image`, { devs: alldevs }).then(({ data }) => {
      console.log("profiles", data)

      setDevProfile(data)

    }).catch((err) => {
      console.log("error fethching dev image ", err)
    })
  }

  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <>
      {!projects || projects.length < 1 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              height: "100vh",
              backgroundColor: " #031926",
            }}
          >
            <img src={loader} alt="loading..." style={{ width: "600px" }} />
          </div>
        </>
      ) : (
        <>
          <div className="projectCards">
            <>
              <div className="main_container">
                <div className="search-bar">
                  <div className="tag_boxData">
                    {tags.map((param: any, index: any) => {
                      return (
                        <p key={index} style={{ color: "white" }}>
                          {param}
                        </p>
                      );
                    })}
                  </div>
                  <div className="matchRateData">
                    <p>
                      We found {projects.length} projects matching your search
                    </p>
                  </div>
                </div>
              </div>

              {projects.map((project: any, index: any) => {
                let team: {}[] = project.team;
                let stack: String[] | undefined = project?.tech_stack;
                let desc: String[] | undefined = project?.description;
                let match_rate: string | undefined = project?.matchRate;
                let proj_title: string | undefined = project?.proj_name;
                let teamLength: number = team.length;
                let stackLength: number | undefined = stack?.length;
                let teamDevs: number = teamLength > 3 ? teamLength - 3 : 0;
                let restDevs: number | any = teamDevs > 0 ? teamDevs : "";

                let trimDesc = function (string: any, length: any) {
                  return string.length > length
                    ? string.substring(0, length) + "..."
                    : string;
                };


                const navigateToProjectDetails = (projectDevs: any) => {
                  if (devProfile) {
                    navigate("/project-details", { state: { tagList: project, devProfiles: devProfile, projectDevs } });
                  }
                };
                return (
                  <motion.div
                    key={index}
                    className="card-main"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ scale: 1.01, originX: 0, color: "#f8e112" }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <a onClick={() => navigateToProjectDetails(team)}>
                      <div className="more">
                        <div>
                          <div className="card_details">
                            <div className="card_title">
                              <motion.div
                                className="cardTitle"
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
                                <div>{trimDesc(proj_title, 70)}</div>
                              </motion.div>
                              <p className="main-member">
                                {team.length > 3 ? team.slice(0, 3).map((dev: any, index: any) => {
                                  return (
                                    <img
                                      src={devProfile && devProfile[dev] ? devProfile[dev].profile_img_link : ""}
                                      alt="devProfile"
                                      key={index}
                                    />
                                  );
                                }) : team?.map((dev: any, index: any) => {
                                  return (
                                    <img
                                      src={devProfile && devProfile[dev] ? devProfile[dev].profile_img_link : ""}
                                      alt="devProfile"
                                      key={index}
                                    />
                                  );
                                })}
                                <span style={{ paddingLeft: "4px", fontSize: "12px" }}>{team.length > 3 ? `+${team.length - 3} ` : ""} </span>
                              </p>
                            </div>
                            <p className="card_desc">{trimDesc(desc, 300)}</p>
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
                                {match_rate}% match rate
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
                    </a>
                  </motion.div>
                );
              })}
            </>
            );
          </div>
        </>
      )}
    </>
  );
}

export default ProjectCard;
