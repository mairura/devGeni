import "./css/devdata.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Devdata = () => {
  const [devs, setDevs] = useState([]);

  //Function to get all developers at NGeni Labs
  const devData = async () => {
    const devs: any = await axios.get("http://localhost:8000/index/devs");
    // console.log("Developers:", devs.data);
    setDevs(devs.data);
  };

  console.log("Names:", devs);

  useEffect(() => {
    devData();
  });

  return (
    <>
      {devs.map((dev: any) => {
        let name = dev.name;
        let shortName = dev.short_name;
        let pic = dev.profile_img_link;
        let gitLink = dev.profile_link;

        return (
          <div className="devdata_container">
            <div className="devdata_details">
              <div className="devdata_image">
                <img src={pic} />
              </div>
              <div className="devdata_name">
                <h3>
                  {name}&nbsp;<span>({shortName})</span>
                </h3>
                <p>Backend Developer</p>
                <i>{gitLink}</i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Devdata;
