import React from "react";
import "../css/about.css";
import { ExternalLink } from "react-external-link";
import { GoLocation } from "react-icons/go";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";
import TopBar from "./TopBar";

const ContactUsPage = () => {
  return (
    <div className="contactPage">
      <div>
        <TopBar />
      </div>
      <div className="contact_page">
        <h5>NGENI TECHNOLOGIES LTD</h5>
        <div className="contactPageData">
          <GoLocation color="#52f2e2" />
          <ExternalLink
            href="https://goo.gl/maps/bGdA6uVyMHVJRN7R9"
            className="link"
          >
            <p>NGENI HQ , Lenana road, Nairobi, Kenya.</p>
          </ExternalLink>
        </div>
        <div className="contactPageData">
          <BsTelephoneOutboundFill color="#52f2e2" />{" "}
          <ExternalLink href="tel: +254792284449" className="link">
            <p>Tel: +254792284449</p>
          </ExternalLink>
        </div>
        <div className="contactPageData">
          <MdEmail color="#52f2e2" />
          <ExternalLink href="mailto:sayhello@ngeni.io" className="link">
            <p>Email: sayhello@ngeni.io</p>
          </ExternalLink>{" "}
        </div>
        <div className="contactUsSocials">
          <ExternalLink href="https://twitter.com/ngenilabs">
            {" "}
            <p>
              <BsTwitter className="twitter_icon" color="rgb(29, 155, 240)" />
            </p>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/company/ngenilabs/mycompany/">
            {" "}
            <p>
              <BsLinkedin className="twitter_icon" color="rgb(29, 155, 240)" />
            </p>
          </ExternalLink>
        </div>
      </div>

      {/* <div className="btn_contactPage">
        <Link to="/contact">
          {" "}
          <div className="button">{<BiChevronLeft color="#52f2e2" />}</div>{" "}
        </Link>
      </div> */}
    </div>
  );
};

export default ContactUsPage;
