import React from "react";
import TeamMember from "../Components/TeamMember";

interface Idevs {
  _id: any;
  name: string;
  short_name: string;
  profile_link: string;
  profile_img_link: string;
  projects: String[];
  tech_stack: String[];
}
type dataType = Idevs[];

function MemberContainer(devData: dataType) {
  console.log(devData);
  return (
    <>
      <div className="member-container">
        {devData?.map((member: any) => (
          <TeamMember dev_name={member} />
        ))}
      </div>
    </>
  );
}

export default MemberContainer;
