import "./css/devdata.css";
import dev from "../assets/sample.png";

const Devdata = () => {
  return (
    <div className="devdata_container">
      <div className="devdata_details">
        <div className="devdata_image">
          <img src={dev} />
        </div>
        <div className="devdata_name">
          <h3>
            Dauglous Omambia&nbsp;<span>(Omambia.pyther)</span>
          </h3>
          <p>Backend Developer</p>
        </div>
      </div>
      <div className="devdata_details">
        <div className="devdata_image">
          <img src={dev} />
        </div>
        <div className="devdata_name">
          <h3>
            Dauglous Omambia&nbsp;<span>(Omambia.pyther)</span>
          </h3>
          <p>Backend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Devdata;
