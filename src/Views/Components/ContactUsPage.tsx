import "../css/about.css";
import { ExternalLink } from "react-external-link";
import { GoLocation } from "react-icons/go";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const ContactUsPage = () => {
  return (
    <div className="contactPage">
      <div className="contact_data">
        <h4>Talk to our contact sales</h4>
        <p>
          Have questions about pricing, plans, or Devgeni? Reach out through our
          hotlines and socials to get in touch with our experts.
        </p>
      </div>
      <div className="contact_page">
        <h5>NGENI TECHNOLOGIES LTD</h5>
        <div className="contactUsSocials">
          <ExternalLink href="https://twitter.com/ngenilabs">
            {" "}
            <p>
              <BsTwitter className="twitter_icon" color="#52F2E2" />
            </p>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/company/ngenilabs/mycompany/">
            {" "}
            <p>
              <BsLinkedin className="twitter_icon" color="#52F2E2" />
            </p>
          </ExternalLink>
        </div>
        <div className="contactPageData">
          <div className="locate_us">
            <div>
              <GoLocation color="#52f2e2" />
            </div>
            <div className="externalLink">
              <ExternalLink
                href="https://goo.gl/maps/bGdA6uVyMHVJRN7R9"
                className="_link"
              >
                <p>NGENI HQ , Lenana road, Nairobi, Kenya</p>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className="contactPageData">
          <div className="locate_us">
            <div>
              <BsTelephoneOutboundFill color="#52f2e2" />{" "}
            </div>
            <div>
              <ExternalLink href="tel: +254792284449" className="_link">
                <p>Tel: +254792284449</p>
              </ExternalLink>
            </div>
          </div>
        </div>
        <div className="contactPageData">
          <div className="locate_us">
            <div>
              <MdEmail color="#52f2e2" />
            </div>
            <div>
              <ExternalLink href="mailto:sayhello@ngeni.io" className="_link">
                <p>Email: sayhello@ngeni.io</p>
              </ExternalLink>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
