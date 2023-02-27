import React from "react";
import "../css/about.css";
import Logo from "../../assets/Logo.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLogo">
        <img src={Logo} alt="logo" />{" "}
      </div>
      <h4>About Us</h4>
      <p>
        DevGeni is a platform for exceptional developers specializing in
        front-end to back-end, Web3, and blockchain technologies. Imagine an app
        with a Project reference, a developer to talk to instantly, and quality
        services. DevGeni provides all that. By browsing through DevGeni you can
        choose any tech stack to get a glimpse of their skills, past projects,
        and expertise. We also make your work easier by helping you choose the
        products/tech stack you want to be used in your application. You can
        talk directly with the developer and specify what you want developed.
        After agreeing on the product development, we work closely with you
        every step of the way to ensure the final product fits your needs
        perfectly. Our team of experts uses the latest technologies and software
        development methodologies to ensure the highest level of quality,
        reliability, and security for your software. Our expertise, combined
        with cutting-edge technology and a customer-first approach, enables us
        to deliver outstanding results for our clients. We understand that every
        business is unique, and that's why we offer custom software development
        services that are tailored to meet your specific needs. 🔥
      </p>
      <TypeAnimation
        sequence={["CODE 🙂 CODE 🖥", 5000]}
        wrapper="h5"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "1.5em" }}
      />

      <div className="btn_contactPage">
        <Link to="/contact">
          {" "}
          <div className="button">{<BiChevronLeft color="#52f2e2" />}</div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
