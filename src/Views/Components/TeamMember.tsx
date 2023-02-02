import "../css/Member.css";
import { Link } from "react-router-dom";

function TeamMember(dev: any) {
  // console.log("Print TEAMMEMBER RESULTS DATA:", dev.dev);
  let devData: any = dev.dev;

  return (
    <>
      <Link
        to={`/profile/?dev_name=${devData?.short_name}`}
        className="main-member"
      >
        <ul>
          <li>
            <img src={devData?.profile_img_link} alt="pic" />
          </li>
          <li>
            <p>{devData?.name}</p>
          </li>
        </ul>
      </Link>
    </>
  );
}

export default TeamMember;
