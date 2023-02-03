import "../css/Member.css";
import { Link } from "react-router-dom";

function TeamMember(dev: any) {
  let devData: any = dev.dev;
  let dev_nickname = devData?.short_name;

  let trimDesc = function (string: any, length: any) {
    return string.length > length ? string.substring(0, length) + ".." : string;
  };

  return (
    <>
      <Link
        to={`/profile/?name=${devData?.name}&shortName=${devData?.short_name}&profilePic=${devData?.profile_img_link}&profileLink=${devData?.profile_links}`}
        className="main-member"
      >
        <ul>
          <li>
            <img src={devData?.profile_img_link} alt="pic" />
          </li>
          <li>
            <p>{trimDesc(dev_nickname, 3)}</p>
          </li>
        </ul>
      </Link>
    </>
  );
}

export default TeamMember;
