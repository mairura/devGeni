import { prev } from "../icons";
import { Link } from "react-router-dom";
import "./css/booknow.css";
import { ExternalLink } from "react-external-link";

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
        </form>
        <ExternalLink href="https://calendly.com/ngeni-info">
          <button className="book-btn">Book Now</button>
        </ExternalLink>
      </div>
    </>
  );
}

export default BookNow;
