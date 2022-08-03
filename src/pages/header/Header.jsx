import React from "react";
import videoBg from "../../assets/agent-background-generic.mp4";

const Header = () => {
  return (
    <div>
      <div>
        <video src={videoBg} muted loop autoPlay></video>
      </div>
      <div>List of agents</div>

      <div>Agent Logo</div>

      <div>Agent Details</div>
    </div>
  );
};

export default Header;
