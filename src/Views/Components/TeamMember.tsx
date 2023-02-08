import "../css/Member.css";
import { Link } from "react-router-dom";

function TeamMember(dev: any) {
  let devData: any = dev.dev;
  let dev_nickname = devData?.short_name;
  let devStack = devData?.tech_stack;
  console.log("PRINT DEVDATA:", devData);

  // let trimDesc: any = function (string: any, length: any) {
  //   return string.length > length ? string.substring(0, length) + ".." : string;
  // };

  return (
    <>
      <Link
        to={`/profile/?name=${devData?.name}&shortName=${devData?.short_name}&profilePic=${devData?.profile_img_link}&profileLink=${devData?.profile_link}&devStack=${devStack}`}
        className="main-member"
      >
        {/* <ul>
          <li> */}
        <img src={devData?.profile_img_link} alt="pic" />
        {/* </li> */}
        {/* <li>
            <p>{dev_nickname}</p>
          </li> */}
        {/* </ul> */}
      </Link>
    </>
  );
}

export default TeamMember;
