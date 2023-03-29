// import { useEffect, useState, useContext } from "react";
// import "./css/style.css";
// import ProjectCard from "./ProjectCard";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { ProjectContext } from "./Context";
// import { Config } from "../config/config";
// import TopBar from "./Components/TopBar";
// import { motion } from "framer-motion";
// import TeamMember from "./Components/TeamMember";
// import linkPay from "../assets/linkpay.png";
// import { languages, teams } from "../icons";
// import { Link } from "react-router-dom";

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     y: "-100vh",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       delay: 0.2,
//       stiffness: 200,
//     },
//   },
//   exit: {
//     y: "100vh",
//     transition: { ease: "easeInOut" },
//   },
// };

// function Projects() {
//   let url = Config.URL;
//   const [showPage, setShowPage] = useState(false);
//   const [loader, setLoader] = useState(true);
//   const [inputValue, setInputValue] = useState("");
//   const [numProjects, setNumProjects] = useState("0");

//   let projects_only:any[] = []
//   if(localStorage.getItem('data_projects_searched')){
//     const data_projects_searched:any = localStorage.getItem('data_projects_searched')
//     projects_only = JSON.parse(data_projects_searched).projects_data
//   }
//   console.log("=======>",projects_only)

//   // const [description, setDescription] = useState("");

//   // const requests = ["I want...", "Design me a...", "Build me a mobile app..."];

//   // const handleClick = (request: any) => {
//   //   setInputValue(request);
//   // };

//   // const handleInputChange = (event: any) => {
//   //   setInputValue(event.target.value);
//   // };

//   //Function takes in user description
//   // const handleAPICall = () => {
//   //   setShowPage(false);
//   //   const endpoint: string = `${url}/index/search_projects`;
//   //   fetch(endpoint, {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify({ description: inputValue }),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       let data_length = data.length;
//   //       setProjects(data.projects_data);
//   //       setDevs(data.dev_data);
//   //       console.log("Print Params:", data.projects_data);
//   //       setNumProjects(data.projects_data.length);
//   //       setParams(data.params);
//   //       setShowPage(true);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error.message);
//   //     });
//   // };

//   //Function to handle selected stack to be called
//   // const handleStack = (e: any) => {
//   //   e.preventDefault();
//   //   let tagList: any = [...localData, e.target.value];
//   //   if (!localData.includes(e.target.value)) {
//   //     setLocalData(tagList);
//   //     let newList: string = tagList.join();
//   //     window.localStorage.setItem("dataTags", newList);
//   //     getData(newList);
//   //   }
//   // };

//   //Function to submit choosen stack and find resp projects
//   // const getData = async (stackToSearch: string) => {
//   //   setShowPage(false);
//   //   const endpoint: string = `${url}/index/projects/tags/${stackToSearch}`;
//   //   try {
//   //     const { data } = await axios.get(endpoint);
//   //     setDevs([...data.dev_data]);
//   //   } catch (error: any) {
//   //     console.error("Error:", error.message);
//   //   }
//   // };

//   //Function to get all stacks from all projects
//   // const getStack = async () => {
//   //   const stack = await axios.get(`${url}/index/tags`);
//   //   let stacks = stack.data;
//   //   setGetStacks(stacks);
//   // };

//   useEffect(() => {
//     setTimeout(() => setLoader(false), 1000);
//   }, []);

//   return (
//     <div className="main_header">
//       <>
//       {projects_only.map((project: any, index: any) => {
//           let team: {}[] | undefined = project?.team;
//           let stack: String[] | undefined = project?.tech_stack;
//           let desc: String[] | undefined = project?.description;
//           let match_rate: string | undefined = project?.match_rate;
//           let proj_title: string | undefined = project?.proj_name;
//           let teamLength: number | undefined = team?.length;
//           let stackLength: number | undefined = stack?.length;
//           let splitStack: string | undefined = stack?.join();

//           let trimDesc = function (string: any, length: any) {
//             return string.length > length
//               ? string.substring(0, length) + "..."
//               : string;
//           };
//           <div className="main_container">
//             <div className="search-bar">
//               <TopBar />
//                 <div className="tag_boxData" >
//                   {stack?.map((param: any) => {
//                     return <p style={{ color: "white"}}>{param}</p>;
//                   })}
//                 </div>
              
//               {/* <div className="main_search">
//                 <p>What would you like to do?</p>
//                 <div className="main_request">
//                   {requests.map((request: any, index: any) => {
//                     return (
//                       <button key={index} onClick={() => handleClick(request)}>
//                         {request}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div> */}
//               {/* <div className="select1">
//                 <input
//                   type="text"
//                   value={inputValue}
//                   onChange={handleInputChange}
//                   className="searchBox"
//                 />
//                 <button onClick={handleAPICall} className="btnSearch">
//                   Go
//                 </button>
//               </div> */}
//               <>
//                 {/* <div className="tagBox">
//                   <div className="tag_box">
//                     <p>Choose from Tags</p>
//                     <div className="tag_boxData">
//                       {params.map((param: any) => {
//                         return <p>{param}</p>;
//                       })}
//                     </div>
//                   </div>
//                 </div> */}
//                 <div className="matchRateData">
//                   <p>We found {numProjects} projects matching your search</p>
//                 </div>
//               </>
//             </div>
//           </div>
//           {loader ? (
//             <div className="item">Loading...</div>
//           ) : (
//             <>
//               <div>
//                 {/* <ProjectCard projects_only={projects_only}/> */}
//                 <div
//                     style={{
//                       marginTop: "30px",
//                       display: "grid",
//                       gridTemplateColumns: "1fr 1fr",
//                     }}
//                   >
//           return (
//             <>
//               <motion.div
//                 className="card-main"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 whileHover={{ scale: 1.03, originX: 0, color: "#f8e112" }}
//                 transition={{ type: "spring", stiffness: 500 }}
//               >
//                 <Link
//                   to={`/projectDetails/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
//                 >
//                   <div className="more">
//                     <div key={project.id}>
//                       <Link
//                         to={`/projectDetails/?projectId=${project._id}&projectDesc=${desc}&projectTeam=${team}`}
//                       >
//                         <div>
//                           <p className="card_devs">
//                             {team?.slice(0, 3).map((member: any) => (
//                               <TeamMember dev={member} className="developer" />
//                             ))}
//                             {/* <span className="main-member">+{diff}</span> */}
//                           </p>
//                         </div>
//                         <div className="card_details">
//                           <motion.p
//                             className="card_title"
//                             whileHover={{
//                               scale: 1.05,
//                               originX: 0,
//                               color: "#52f2e2",
//                             }}
//                             transition={{ type: "spring", stiffness: 500 }}
//                           >
//                             <img
//                               src={linkPay}
//                               alt="linkpay logo"
//                               style={{
//                                 textAlign: "left",
//                                 height: 15,
//                                 paddingRight: 4,
//                               }}
//                             />
//                             {trimDesc(proj_title, 20)}
//                           </motion.p>
//                           <p className="card_desc">{desc}</p>
//                           <div className="rate">
//                             <span
//                               className="lengths"
//                               style={{
//                                 fontSize: 8,
//                                 paddingTop: 7,
//                                 color: "#fff",
//                                 paddingRight: 10,
//                               }}
//                             >
//                               {match_rate}%{" "}
//                             </span>
//                             <span>{teams}</span>
//                             <p className="lengths">{teamLength}</p>
//                             <span>{languages}</span>
//                             <p className="lengths">{stackLength}</p>
//                           </div>
//                         </div>
//                       </Link>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             </>
//           );
//                 </div>
//               </div>
//             </>
//           )}
//       {/* )} */}
//         </>
//     </div>
//   );
// })} 
// }

// export default Projects;
