import React, { useRef, useEffect } from "react";
import "../css/about.css";
// import pic from "../../assets/FAQS.jpg";
import Collapsible from "react-collapsible";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
// @ts-ignore
import bgVideo from "../../assets/VID-20230224-WA0022.mp4";
import pic from "../../assets/unsplash1.jpg";
import { Link } from "react-router-dom";

const FAQsPage = () => {
  return (
    <div className="faqsContainer">
      <div className="faqsHeader">
        <div className="overlay"></div>
        {/* <video src={bgVideo} loop autoPlay muted /> */}

        <img src={pic} alt="bgImg" height="200px" width="100%" />
        <h4>Faqs</h4>
      </div>
      <div className="faqsBox">
        <div className="faqsQuiz">
          <Collapsible
            trigger={"How Does DevGeni work?"}
            triggerTagName="faqsForm"
            transitionTime={500}
            easing="ease-in-out"
          >
            <p>
              Finding the right software developer for your project can be
              strenuous. What if there was a platform that allowed you to choose
              from a large pool of experts and allow you to have a look at their
              past projects. That&rsquo;s DevGeni. The platform features a
              user-friendly interface that allows you to input your project
              requirements. DevGeni then uses this information to search its
              database for relevant matches. Based on the specifications, the
              platform will populate a list of developer portfolios that tally
              with your query. The developer portfolios include their tech stack
              outlining the programming languages, frameworks and tools they use
              as well as links to their GitHub profiles.
            </p>
          </Collapsible>
        </div>
        <div className="faqsQuiz">
          <Collapsible
            trigger="What Kind of Developers Can I Find on DevGeni?"
            triggerTagName="faqsForm"
          >
            <p>
              DevGeni is a one-stop shop for software developers with expertise
              in various programming languages, frameworks and technologies. The
              platform links you to front-end developers who specialize in
              building user interfaces using HTML, CSS and JavaScript. You will
              also find back-end developers proficient in Python, Java and PHP.
              In the same fashion, you will also find full-stack developers
              adept in both front-end and back-end development. If your project
              is Web3 based, you also can&rsquo;t go wrong. DevGeni&rsquo;s
              catalog includes developers specializing in smart contract
              languages such as Solidity, Reach, Pyteal and Rust. If mobile app
              development is your space, you&rsquo;ll also grow fond of the pool
              of developers experienced in building native and hybrid mobile
              apps for Android and iOS platforms.
            </p>
          </Collapsible>
        </div>
        <div className="faqsQuiz">
          <Collapsible
            trigger="Can I Trust the Quality of Developers on DevGeni?"
            triggerTagName="faqsForm"
          >
            <p>
              Simple straightforward answer. Proof of Work! Once DevGeni matches
              you with potential developers, you can view their past projects
              and have a peek at their catalog allowing you to pinpoint the
              right fit(s) for your project.
            </p>
          </Collapsible>
        </div>
        <div className="faqsQuiz">
          <Collapsible
            trigger="What Is The Expected Timeline for Completing a Project on DevGeni?"
            triggerTagName="faqsForm"
          >
            <p>
              DevGeni is specifically developed to be intuitive and
              client-centric. However, the amount of time it takes to complete a
              project varies from assignment to assignment depending on the
              specifications, tweaks and the amount of time it takes until the
              client is happy with the final product.
            </p>
          </Collapsible>
        </div>
      </div>
      <div className="btn_contactPage">
        <Link to="/contact">
          {" "}
          <div className="button">{<BiChevronLeft color="#52f2e2" />}</div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default FAQsPage;
