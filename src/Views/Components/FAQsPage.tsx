import React, { useRef, useEffect } from "react";
import "../css/about.css";
import pic from "../../assets/FAQS.jpg";

const FAQsPage = () => {
  return (
    <div className="faqsContainer">
      {/* <video muted loop poster={pic} height="300" width="400" controls>
        <source src="../../assets/WhatsAppVideo.mp4" type="video/mp4" />
      </video> */}
      <div className="faqsHeader">Faqs</div>
      <div className="faqsBox">
        <p>Do you offer Web3.0 services?</p>
      </div>
    </div>
  );
};

export default FAQsPage;
