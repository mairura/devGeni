import { Link, useLocation } from "react-router-dom";
import { prev, share } from "../icons";
import { greater } from "../icons";
import "./css/profile.css";
import minitrade from "../assets/minitrade.png";
import linkpay from "../assets/linkpay.png";

const Profile = () => {
  const location = useLocation();
  console.log("Location:", location);
  const params = new URLSearchParams(location.search);
  const imageProfile: any = params.get("UserUrl");
  const nameProfile = params.get("name");
  return (
    <div className="profile_container">
      <div className="options">
        <Link to="/">{prev}</Link> {share}
      </div>
      <div className="profile_desc">
        <img src={imageProfile} alt="developer" />
        <div className="profile_name">{nameProfile}</div>
        <div className="profile_nickname">(Omambia.pyther)</div>
        <p>Backend Developer</p>
      </div>
      <div className="profile_stack">
        <h5>Tech Stack</h5>
        <div className="dev_stack">
          <div>Java</div>
          <div>Golang</div>
          <div>Python</div>
          <div>Typescript</div>
          <div>ReactJS</div>
          <div>Javascript</div>
        </div>
      </div>
      <div className="profile_projects">
        <div className="profile_title">
          <h5>Projects</h5>
          <div>See All&nbsp;&nbsp;&nbsp;&nbsp;{greater}</div>
        </div>
        <div className="profile_project">
          <div className="project">
            <img src={minitrade} alt="logo" />
            <p>Minitrade</p>
          </div>
          <div className="project">
            <img src={linkpay} alt="logo" />
            <p>Linkpay</p>
          </div>
          <div className="project">
            <img src={linkpay} alt="logo" />
            <p>Potara</p>
          </div>
        </div>
      </div>
      <div className="profile_media">
        <div className="profile_title">
          <h5>Media and Links</h5>
          <div>See All&nbsp;&nbsp;&nbsp;&nbsp;{greater}</div>
        </div>
        <div className="profile_data">
          <div className="profile_links">
            <a href="#">dauglous@ngeni.io</a>
            <a href="https://github.com/domambia">www.github.com/domambia</a>
            <a href="https://github.com/domambia">www.github.com/domambia</a>
            <a href="https://github.com/domambia">www.github.com/domambia</a>
            <a href="https://github.com/domambia">www.github.com/domambia</a>
            <a href="#">dauglous.twitter</a>
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
  );
};

export default Profile;
