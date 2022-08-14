import React from "react";
import videoBg from "../../assets/agent-background-generic.mp4";
import imageBG from "../../assets/agent-background-generic.JPG";
import "../map/Maps.css";

const Maps = () => {
  return (
    <div className="maps__container">
      <div className="maps__sub__container"></div>
      <div className="maps__img__container">
        <video
          className="maps__img__icon"
          src={videoBg}
          muted
          loop
          autoPlay
        ></video>
        {/* <img className="maps__img__icon" src={imageBG} alt="BG" /> */}
      </div>
    </div>
  );
};

export default Maps;
