import React from "react";
import "../css/Member.css";
import sample from "../../assets/sample.png";

function teamMember() {
  //Function to get team for a project

  return (
    <>
      <div className="member-container">
        <div className="main-member">
          <ul>
            <li>
              <img src={sample} alt="sample-profile" />
            </li>
            <li>
              <p>Omambia</p>
            </li>
          </ul>
        </div>
        <div className="main-member">
          <ul>
            <li>
              <img src={sample} alt="sample-profile" />
            </li>
            <li>
              <p>Omambia</p>
            </li>
          </ul>
        </div>
        <div className="main-member">
          <ul>
            <li>
              <img src={sample} alt="sample-profile" />
            </li>
            <li>
              <p>Omambia</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default teamMember;
