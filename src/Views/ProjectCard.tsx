import "./css/style.css";
import "./css/card.css";
// import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png";
import { languages, teams } from "../icons";
import { Link } from "react-router-dom";
import { Config } from "../config/config";
import { motion } from "framer-motion";
import TopBar from "./Components/TopBar";

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
  let projects_only:any[] = []
  if(localStorage.getItem('data_projects_searched')){
    const data_projects_searched:any = localStorage.getItem('data_projects_searched')
    projects_only = JSON.parse(data_projects_searched).projects_data
  }
  const projectLength = projects_only.length;
 

  let params_only:any[] = []
  if(localStorage.getItem('dataParams')){
    const dataParams:any = localStorage.getItem('dataParams')
    params_only = dataParams.split();
  }
  console.log("Print All Projects Data", params_only)
  
  let url = Config.URL;
  return (
    <>
      <div
        style={{
          marginTop: "150px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {projects_only.map((project: any, index: any) => {
          let team: {}[] | undefined = project?.team;
          let stack: String[] | undefined = project?.tech_stack;
          let desc: String[] | undefined = project?.description;
          let match_rate: string | undefined = project?.match_rate;
          let proj_title: string | undefined = project?.proj_name;
          let teamLength: number | undefined = team?.length;
          let stackLength: number | undefined = stack?.length;
          let splitStack: string | undefined = stack?.join();

          let trimDesc = function (string: any, length: any) {
            return string.length > length
              ? string.substring(0, length) + "..."
              : string;
          };

          return (
            <>
            <div className="main_container">
            <div className="search-bar">
              <TopBar />
                <div className="tag_boxData" >
                  {params_only.map((param: any) => {
                    return <p style={{ color: "white"}}>{param}</p>;
                  })}
                </div>
              <>
                <div className="matchRateData">
                  <p>We found {projectLength} projects matching your search</p>
                </div>
              </>
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
                      <Link
                        to={`/projectDetails/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
                      >
                        {/* <div>
                          <p className="card_devs">
                            {team?.slice(0, 3).map((member: any) => (
                              <TeamMember dev={member} className="developer" />
                            ))}
                          </p>
                        </div> */}
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
                            {trimDesc(proj_title, 20)}
                          </motion.p>
                          <p className="card_desc">{desc}</p>
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
