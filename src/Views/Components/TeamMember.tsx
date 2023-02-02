import { useEffect, useState } from "react";
import "../css/Member.css";
import axios from "axios";
import { ISingleDev } from "../Context";
import { Config } from "../../config/config";
import { Link } from "react-router-dom";

function TeamMember(member: any) {
  // const [singleDev, setSingleDev] = useState<ISingleDev>();
  let url = Config.URL;

  //Function endpoint to get team for a project
  // const getSingleDev = async (dev_name: any) => {
  //   const data: any = await axios.get(`${url}/index/dev/${dev_name.dev_name}`);
  //   setSingleDev(data.data);
  // };

  // useEffect(() => {
  //   getSingleDev(dev_name);
  console.log("Print TEAMMEMBER RESULTS DATA:", member);
  // });

  return (
    <>
      <Link
        to={`/profile/?dev_name=${member.short_name}`}
        className="main-member"
      >
        <ul>
          <li>
            <img src={member?.profile_img_link} alt="pic" />
          </li>
          <li>
            <p>{member?.name}</p>
          </li>
        </ul>
      </Link>
      <h3>TEAM MEMBERS</h3>
    </>
  );
}

export default TeamMember;
