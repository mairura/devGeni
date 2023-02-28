import { useEffect, useState } from "react";
import "./css/ProjectDetail.css";
import { prev, ksh } from "../icons";
import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { IProjects, ISingleDev } from "./Context";
import { Config } from "../config/config";
import { ExternalLink } from "react-external-link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Hambuger from "../assets/ham.svg";
import close from "../assets/close.svg";
import ContactUs from "./Components/ContactUs";
import TopBar from "./Components/TopBar";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const containerVariantsY = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut" },
  },
  hover: {
    scale: 1.03,
    textShadow: "0px 0px 8px rgb(255, 255, 255",
    boxShadow: "0px 0px 8px rgb(255, 255, 255",
    transition: {
      duration: 0.5,
      repeat: Infinity,
    },
  },
};

function ProjectDetail() {
  const [devs, setDevs] = useState<Array<ISingleDev>>([]);
  const [projectData, setProjectData] = useState<IProjects>();
  // const [loader, setLoader] = useState(true);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const proj_name = urlParams.get("projectId");
  const proj_desc = urlParams.get("projectDesc");
  const proj_team = urlParams.get("projectTeam");
  let url = Config.URL;

  //Function to submit choosen stack and find resp projects
  const getDeveloper = async () => {
    const endpoint: string = `${url}/index/devs/names/${proj_team}`;
    try {
      const { data } = await axios.get(endpoint);
      setDevs(data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  //Getting single project
  const singleProject = async () => {
    try {
      const data: any = await axios.get(`${url}/index/projects/${proj_name}`);
      setProjectData(data.data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  let proj_name_get: String | undefined = projectData?.proj_name;

  useEffect(() => {
    singleProject();
  }, []);

  useEffect(() => {
    getDeveloper();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setLoader(false), 1000);
  // }, []);

  let trimDesc = function (string: any, length: any) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  return (
    <>
      <div className="projectDetail_container">
        <div className="project_banner">
          <TopBar />
          <div className="preview_container">
            {/* <img src={linkpayui} alt="linkpay ui" /> */}
          </div>
        </div>
        <div className="detailsPage">
          <div className="title_desc">
            <img src={linkPay} alt="linkpay logo" />
            <motion.h3
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            >
              {proj_name_get}{" "}
            </motion.h3>{" "}
          </div>
          <div className="body_desc">
            <p>{proj_desc}</p>
          </div>
          <div className="project_team">Team</div>

          {/* {loader ? (
                <p className="item_details">
                  <HashLoader
                    color="#f05e56"
                    loading={loader}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </p>
              ) : ( */}
          <div className="member-container">
            {/* <Carousel> */}
            {devs?.map((member: any) => (
              <TeamMember dev={member} />
            ))}
            {/* </Carousel> */}
          </div>
          {/* )} */}

          <br />
          <ExternalLink
            href="https://calendly.com/ngeni-info"
            className="btn_link"
          >
            <motion.button
              className="booking-button"
              variants={containerVariantsY}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              exit="exit"
            >
              Book Now
            </motion.button>
          </ExternalLink>
          <br />
          <br />
          <ExternalLink href="https://meet.google.com/fhu-xuhy-rzr">
            <motion.button
              className="booking-button"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {ksh} Speak to a dev team now
            </motion.button>
          </ExternalLink>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
