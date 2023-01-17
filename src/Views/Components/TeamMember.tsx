import React from 'react'
import "../css/Member.css"
import sample from "../../assets/sample.png"

function teamMember() {
  return (
    <>
    <div className='member-container'>
        <div className="main-member"><img src={sample} alt="sample-profile"/></div>
        <div className="main-member"><img src={sample} alt="sample-profile"/></div>
        <div className="main-member"><img src={sample} alt="sample-profile"/></div>
    </div>
    </>
  )
}

export default teamMember