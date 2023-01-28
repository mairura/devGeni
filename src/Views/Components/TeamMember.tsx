import { useEffect, useState } from "react";
import "../css/Member.css";
import axios from "axios";
import { ISingleDev } from "../Context";
import { Config } from "../../config/config";
import { Link } from "react-router-dom";

function TeamMember(dev_name: any) {
  const [singleDev, setSingleDev] = useState<ISingleDev>();
  let url = Config.URL;

  //Function endpoint to get team for a project
  const getSingleDev = async (dev_name: any) => {
    const data: any = await axios.get(`${url}/index/dev/${dev_name.dev_name}`);
    setSingleDev(data.data);
  };

  useEffect(() => {
    getSingleDev(dev_name);
  });

  return (
    <>
      <Link
        to={`/profile/?profilePic=${singleDev?.profile_img_link}&name=${singleDev?.name}&shortName=${singleDev?.short_name}&profileLink=${singleDev?.profile_link}`}
        className="main-member"
      >
        <ul>
          <li>
            <img src={singleDev?.profile_img_link} alt="sample-profile" />
          </li>
          <li>
            <p>{singleDev?.name}</p>
          </li>
        </ul>
      </Link>
    </>
  );
}

export default TeamMember;
