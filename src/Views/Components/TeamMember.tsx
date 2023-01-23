import { useEffect, useState } from "react";
import "../css/Member.css";
import axios, { Axios } from "axios";
import { ISingleDev } from "../Context";

function TeamMember(dev_name: any) {
  const [singleDev, setSingleDev] = useState<ISingleDev>();
  //Function endpoint to get team for a project
  const getSingleDev = async (dev_name: any) => {
    const data: any = await axios.get(
      `http://127.0.0.1:8000/index/dev/${dev_name.dev_name}`
    );
    setSingleDev(data.data);
  };

  useEffect(() => {
    getSingleDev(dev_name);
  }, []);

  return (
    <>
      <div className="main-member">
        <ul>
          <li>
            <img src={singleDev?.profile_img_link} alt="sample-profile" />
          </li>
          <li>
            <p>{singleDev?.name}</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TeamMember;
