import React from "react";
import videoBg from "../../assets/agent-background-generic.mp4";
import "../header/header.css";
import { useState, useEffect } from "react";

const Header = ({ getAgents }) => {
  console.log(getAgents);

  return (
    <div className="main__container">
      <div className="sub__container">
        <div>
          <video src={videoBg} muted loop autoPlay></video>
        </div>
        <div className="agents__header wrapper">List of agents</div>
      </div>

      <div>Agent Logo</div>

      <div>Agent Details</div>
    </div>
  );
};

export default Header;
