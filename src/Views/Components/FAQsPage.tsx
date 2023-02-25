import React, { useRef, useEffect } from "react";
import "../css/about.css";
import pic from "../../assets/FAQS.jpg";

const FAQsPage = () => {
  return (
    <div className="faqsContainer">
      <video src="../../assets/WhatsAppVideo.mp4" muted loop autoPlay />
      <div className="faqsHeader">
        {/* <img src={pic} />  */}
        Faqs
      </div>
      <div className="faqsBox">
        <p>Do you offer Web3.0 services?</p>
      </div>
    </div>
  );
};

export default FAQsPage;
