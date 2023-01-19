import React from 'react';
import "./css/card.css"
import lalo from "../assets/lalo.png"
import TeamMember from './Components/TeamMember';
import { Link } from "react-router-dom"
import axios from 'axios';
// import { Context } from './Context';


function ProjectCard() {
  // const { projectData, setProjectData } = useContext(Context);

  // for(let i=1; i <= projectData.length; i++){
  //   console.log("Project Data:", projectData[i]);
  // }

  //Get all projects
  const allProjects = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/index/projects");
      console.log("All Projects Across:", data);
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  }

  return (
    <>
    
    <div className='card-main'>  
        <Link to="project">     
            <div className='more'>
                <h2 style={{color:'#A74EBB'}}>
                  <img src={lalo} alt="lalo logo" style={{marginRight:"10px", width:"25px", height:"25px"}}/>
                  Lalo Communities
                </h2>
                <h3>Web3 Blockchain based 
                platform for bookings and
                deliveries.</h3>
                <p>PWA, install it to your 
                homescreen.</p>
                <p>Order anything + anytime
                through whatsapp.</p>
                <p>An army of payment 
                options  fiat & crypto .</p>
                <p>Connecting various local
                & international tourists to
                service providers.</p>
              
                <div className='btn-container'>
                    <button onClick={() => {allProjects()}} >Lines of code</button>
                    <button>live project</button>
                </div>
              </div>
          </Link>
        </div>
    
        <br/><br/>
        <TeamMember/>
    </>
  )
}

export default ProjectCard