import { ExternalLink } from "react-external-link";
import "../css/bookbtn.css"

const BookBtn = () => {
  return (
    <div>
     <div className="bookbtn_container">
           <ExternalLink
              href="https://calendly.com/ngeni-info"
              className="btn_link"
            >
              <button
                className="booking-button"
              >
                Book Now
              </button>
            </ExternalLink>
      </div>
    </div>
    )
}

export default BookBtn