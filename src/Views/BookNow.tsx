import React from "react";
import { prev } from "../icons";
import { Link } from "react-router-dom";
import "./css/booknow.css";

function BookNow() {
  return (
    <>
      <div className="top-navigator">
        <Link to="/">{prev}</Link>
      </div>
      <div className="top-title-desc">
        <h2>DEVGENI</h2>
        <p>Team and Skills Matching Engine</p>
      </div>
      <div className="form-container">
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="date" placeholder="Pick Date" />
          <input type="text" />

          {/* <textarea id="story" name="story">
            Type Message...
            </textarea> */}
        </form>
        {/* <ReactWhatsapp number="+254702185556"> */}
        <button className="book-btn">Book Now</button>
        {/* </ReactWhatsapp> */}
      </div>
    </>
  );
}

export default BookNow;
