import { Link } from "react-router-dom";
import { prev, share } from "../icons";
import { greater } from "../icons";
import "./css/profile.css";
import minitrade from "../assets/minitrade.png";
import linkpay from "../assets/linkpay.png";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";

const Profile = () => {
  const [stacks, setStacks] = useState([]);
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const imageProfile: any = params.get("profilePic");
  const nameProfile = params.get("name");
  const shortName: any = params.get("shortName");
  const profileLink: any = params.get("profileLink");

  useEffect(() => {
    const dev_stack: any = params.get("devStack");
    const itemsArray: any = dev_stack.split(",");
    setStacks(itemsArray);
  }, []);

  return (
    <div className="profile_container">
      <div className="options">
        <Link to="/">{prev}</Link> {share}
      </div>
      <div className="profile_desc">
        <img src={imageProfile} alt="developer" />
        <div className="profile_name">{nameProfile}</div>
        <div className="profile_nickname">({shortName})</div>
        <p>Software Developer</p>
      </div>
      <div className="prof">
        <div className="profile_stack">
          <h5>Tech Stack</h5>
          <div className="dev_stack">
            {stacks.map((item: any) => {
              return <div className="dev_stack_item">{item}</div>;
            })}
          </div>
        </div>
        <div className="profile_projects">
          <div className="profile_title">
            <h5>Projects</h5>
            {/* <div className="see_all">
              See All&nbsp;&nbsp;&nbsp;&nbsp;<span>{greater}</span>
            </div> */}
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
            {/* <div className="see_all">
              See All&nbsp;&nbsp;&nbsp;&nbsp;{greater}
            </div> */}
          </div>
          <div className="profile_data">
            <div className="profile_links">
              <a href={profileLink}>{profileLink}</a>
              <a href="https://www.linkedin.com/company/ngenilabs/mycompany/">
                nGeni Labs LinkedIn
              </a>
              <a href="https://ngeni.io/">nGeni Labs Website</a>
              <a href="https://twitter.com/ngenilabs">nGeni Labs Twitter</a>
            </div>
            <div className="vertical_line"></div>
            <div className="profile_box">
              <div className="profile_pic">Profile</div>
              <div className="profile_pic">Profile</div>
              <div className="profile_pic">Profile</div>
            </div>
          </div>
        </div>
        <div className="ngeni_labs"></div>
      </div>
    </div>
  );
};

export default Profile;
