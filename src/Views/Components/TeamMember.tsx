import "../css/Member.css";
import { Link, useLocation } from "react-router-dom";

function TeamMember(dev: any) {
  let devData: any = dev.dev;
  let devStack = devData?.tech_stack;

  const location = useLocation();
  // console.log("Location Data", location.pathname);
  let mystyle = "";

  if (location.pathname == "/projectDetails/") {
    mystyle = "profile_dev";
  } else {
    mystyle = "main-member";
  }

  return (
    <>
      <Link
        to={`/profile/?name=${devData?.name}&shortName=${devData?.short_name}&profilePic=${devData?.profile_img_link}&profileLink=${devData?.profile_link}&devStack=${devStack}`}
        className={mystyle}
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
