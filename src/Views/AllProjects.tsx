import { useState, useEffect, CSSProperties } from 'react'
import { Config } from "../config/config";
import { IProjects } from "./Context";
import axios from "axios"
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import linkPay from "../assets/linkpay.png";
import TopBar from './Components/TopBar';
import { languages, teams } from "../icons";
import HashLoader from 'react-spinners/HashLoader';

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

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

const AllProjects = () => {
  const [projects, setProjects] = useState<Array<IProjects>>([]);
  const [numProjects, setNumProjects] = useState("0");

  const navigate = useNavigate()

  let url = Config.URL;
  //Function to handle all projects
  const allProjects = async () => {
    const endpoint: string = `${url}/index/projects`;
    try {
      const { data } = await axios.get(endpoint);
      // console.log("Print All data:", data)
      setProjects(data);
      setNumProjects(data.length);
    } catch (error: any) {
      console.error("Error:", error.message)
    }
  }

  useEffect(() => {
    allProjects()
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
            <div className='allProjects_container'>
              <div className="matchRateData">
                <p>We found {numProjects} projects matching your search</p>
              </div>
              <div
                style={{
                  marginTop: "15px",
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

                  const navigateToProjectDetails = () => {
                    navigate('/project-details', { state: { tagList: project } });
                  }

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
                        key={index}
                      >
                        <a onClick={() => navigateToProjectDetails()}>
                          <div className="more">
                            <div key={project.id}>
                              <div>
                                {/* <p className="card_devs">
                            {dev_data?.slice(0, 3).map((member: any) => (
                              <TeamMember dev={member} className="developer" />
                            ))}
                            <span className="main-member">+{diff}</span>
                          </p> */}
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
                                  {trimDesc(proj_title, 30)}
                                </motion.p>
                                <p className="card_desc">{trimDesc(desc, 300)}</p>
                                <div className="rate">
                                  <span>{teams}</span>
                                  <p className="lengths">{teamLength}</p>
                                  <span>{languages}</span>
                                  <p className="lengths">{stackLength}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default AllProjects