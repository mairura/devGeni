import React from 'react';
import "./css/card.css"
import lalo from "../assets/lalo.png"
import TeamMember from './Components/TeamMember';
import {Link} from "react-router-dom"


function ProjectCard() {
  return (
    <>
        <div className='card-main'>
            <h2 style={{color:'#A74EBB'}}><img src={lalo} alt="lalo logo" style={{marginRight:"10px", width:"25px", height:"25px"}}/>Lalo Communities</h2>
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
                <button>Lines of code</button>
                <button>live project</button>
            </div>
            <div className='more'>
                <Link to="project"><button className='more-btn'>Learn More</button></Link>
            </div>
        </div>
        <br/><br/>
        <TeamMember/>
    </>
  )
}

export default ProjectCard