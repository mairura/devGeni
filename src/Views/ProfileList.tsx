// import "./css/profileList.css";
// import axios from "axios";
// import { useEffect, useState, useContext } from "react";
// import { Config } from "../config/config";

// const ProfileList = () => {
//   const [getStacks, setGetStacks] = useState([]);
//   let url = Config.URL;

//   //Function to get all stacks from all projects
//   const getStack = async () => {
//     const stack = await axios.get(`${url}/index/tags`);
//     console.log("Stack Listed:", stack.data);
//     let stacks = stack.data;
//     setGetStacks(stacks);
//   };

//   useEffect(() => {
//     getStack();
//   }, []);

//   return (
//     <div>
//       <form>
//         <select>
//           {getStacks.map((item) => (
//             <option>{item}</option>
//           ))}
//         </select>
//       </form>
//     </div>
//   );
// };

// export default ProfileList;
