import React from "react";
import "./css/Detail.css";
import {prev, share, ksh, verified} from "../icons"
import TeamMember from "./Components/TeamMember";
import linkPay from "../assets/linkpay.png"
import linkpayui from "../assets/linkpayui.png"
import {Link} from "react-router-dom"

function ProjectDetail() {
  return (
    <>
      <div className="project_banner">
        <div className="options">
          <Link to="/">{prev}</Link> {share}
        </div>
        <div className="preview_container">
          <img src={linkpayui} alt="linkpay ui"/>
        </div>
      </div>
      <div className="title_desc">
        <img src={linkPay} alt="linkpay logo"/> <h3> &nbsp; link Pay</h3>  {verified}
      </div>
      <div className="body_desc">
        <p>linkPay harmonizes all your payment services into one link enabling 
          a user to process payment across multiple gateways in Fiat and Crypto.
          linkpay enables crypto payments through the Ethereum blockchain,
          Fiat payments through M-Pesa and Card payments through Paypal. The
          platform was coded lively in 5 days.</p>
          <h4>Dev hours &nbsp; &nbsp; <span>700+</span></h4>
          <h4>tech_stack &nbsp; &nbsp; <span><img alt="body describer" src="https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg"/></span></h4>
      </div>
      <div>
        <h3 style={{color:"#fff"}}>team</h3>
        <TeamMember/><br/>
        <button className="booking-button">Book Now</button><br/><br/>
        <button className="booking-button">{ksh} Speak to a dev team now</button><br/><br/>
      </div>
    </>
  );
}

export default ProjectDetail;
