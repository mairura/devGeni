import "./css/profile.css";
import minitrade from "../assets/minitrade.png";
import linkpay from "../assets/linkpay.png";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Logo from "../assets/Logo.png";
import TopBar from "./Components/TopBar";
import { ISingleDev } from "./Context";
import axios from "axios";
import { Config } from "../config/config";

const Profile = () => {
  const [stacks, setStacks] = useState([]);
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const shortName: any = params.get("shortName");
  const profileLink: any = params.get("profileLink");

  const[devData, setDev ]=useState<Array<ISingleDev>>([]);

  let url = Config.URL;

  const getDeveloper = async () => {
    const dev: any = await axios.get(`${url}/index/dev/${shortName}`);
    setDev([dev.data])
    setStacks(dev.data.tech_stack)
  }

  useEffect(() => {
    getDeveloper();
  }, []);

  return (
    <div className="profile_container">
      <div className="optionsProfile">
        <TopBar />
      </div>
        {devData.map((dev: any, index: any) => {
          return (
            <div className="dev_data" key={index}>
              <div className="profile_desc">
                <img src={dev.profile_img_link} alt="developer" />
                <div className="profile_name">{dev.name}</div>
                <div className="profile_nickname">({dev.short_name})</div>
                <p>Software Engineer</p>
              </div>
              <div className="prof">
                <div className="profile_stack">
                  <h5>Tech Stack</h5>
                  <p className="dev_stack">
                    {stacks.map((item: any, index: any) => {
                      return <div className="dev_stack_item" key={index}>{item}</div>;
                    })}
                  </p>
                </div>
                <div className="profile_projects">
                  <div className="profile_title">
                    <h5>Projects</h5>
                  </div>
                  <div className="profile_project">
                    <div className="project">
                      <img src={minitrade} alt="logo" />
                      <p>Minitrade</p>
                    </div>
                    <div className="project">
                      <ExternalLink
                        href="https://github.com/devngeni"
                        className="externalLink"
                      >
                        <img src={linkpay} alt="logo" />
                        <p>Linkpay</p>
                      </ExternalLink>
                    </div>
                    <div className="project">
                      <ExternalLink
                        href="https://github.com/devngeni/potara"
                        className="externalLink"
                      >
                        <img src={linkpay} alt="logo" />
                        <p>Potara</p>
                      </ExternalLink>
                    </div>
                  </div>
              </div>
              <div className="profile_media">
                <div className="profile_title">
                  <h5>Media and Links</h5>
                </div>
                <div className="profile_data">
                  <div className="profile_links">
                    <div className="profile_link">
                      <BsGithub />
                      <a href={dev.profile_link}>
                        &nbsp;&nbsp;
                        {dev.profile_link}
                      </a>
                    </div>
                    <div className="profile_link">
                      <BsLinkedin />
                      <a href="https://www.linkedin.com/company/ngenilabs/mycompany/">
                        &nbsp;&nbsp; nGeni Labs LinkedIn
                      </a>
                    </div>
                    <div className="profile_link">
                      <img src={Logo} alt="logo" />
                      <a href="https://ngeni.io/">
                        &nbsp;&nbsp;nGeni Labs Website
                      </a>
                    </div>
                    <div className="profile_link">
                      <BsTwitter />
                      <a href="https://twitter.com/ngenilabs">
                        &nbsp;&nbsp; nGeni Labs Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              {/* <div className="ngeni_labs"></div> */}
            </div>
            </div>
          )
        })}

    </div>
  );
};

export default Profile;
