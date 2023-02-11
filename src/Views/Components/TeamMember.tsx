import "../css/Member.css";
import { Link } from "react-router-dom";

function TeamMember(dev: any) {
  let devData: any = dev.dev;
  let devStack = devData?.tech_stack;

  return (
    <>
      <Link
        to={`/profile/?name=${devData?.name}&shortName=${devData?.short_name}&profilePic=${devData?.profile_img_link}&profileLink=${devData?.profile_link}&devStack=${devStack}`}
        className="main-member"
      >
        <img
          src={devData?.profile_img_link}
          alt="pic"
          className="dev_profile"
        />
      </Link>
    </>
  );
}

export default TeamMember;
