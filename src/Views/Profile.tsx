import { Link } from "react-router-dom";
import { prev, share } from "../icons";
import dev from "../assets/Ellipse 12.png";
import { greater } from "../icons";
import "./css/profile.css";
import minitrade from "../assets/minitrade.png";
import linkpay from "../assets/linkpay.png";

const Profile = () => {
  return (
    <div className="profile_container">
      <div className="options">
        <Link to="/">{prev}</Link> {share}
      </div>
      <div className="profile_desc">
        <img src={dev} />
        <div className="profile_name">Dauglous Omambia</div>
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
            <img src={minitrade} />
            <p>Minitrade</p>
          </div>
          <div className="project">
            <img src={linkpay} />
            <p>Linkpay</p>
          </div>
          <div className="project">
            <img src={linkpay} />
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
