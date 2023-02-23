import React from "react";
import "../css/about.css";
import Logo from "../../assets/Logo.png";
import { TypeAnimation } from "react-type-animation";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> e926178cf8aef80645020b2f285feef0e129c8b4

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLogo">
        <img src={Logo} alt="logo" />{" "}
      </div>
      <TypeAnimation
        sequence={["CODE 🙂 CODE 🖥", 5000, "CODE 💻 ", 5000]}
        wrapper="h5"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1.5em" }}
      />
      <p>
        Next generation FULLSTACK WEB3 DEVELOPERS & TECH strategists building
        ComPlex and cross-platform Applications, Bots & dApps for Blockchain,
        Fintech, Cryptocurrencies & Markets Trading. We develop across the
        Entire ECOSYSTEM & 💗 COMPLEXITY! Mobile Payments, API & DeFi bridges,
        Digital wallets...? We got THIS. It's in OUR BLOOD 😍 We’re GENERATION
        M-Pesa👨👨👦👦 moving money Digitally since 2007🔥
      </p>
      <i>
        Building prominent applications, dApps, automation tools, plugins,
        bridges/gateways, wallets & bots for the world's hottest Blockchain
        Protocols, Institutional & Professional Markets Traders, FinTech
        platforms, and Cryptocurrency projects.
      </i>
      <div className="btn_about">
<<<<<<< HEAD
        <Link to="/contact">
          <button>Get Back</button>
        </Link>
=======
        <button>Get Back</button>
>>>>>>> e926178cf8aef80645020b2f285feef0e129c8b4
      </div>
    </div>
  );
};

export default AboutPage;
