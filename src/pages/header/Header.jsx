import React from "react";
import imageBG from "../../assets/agent-background-generic.JPG";
import "../header/header.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
  const API = "https://valorant-api.com/v1/agents?isPlayableCharacter=True";

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(API);
    setAgents(data.data);
    data.data.sort((a, b) => (a.id > b.id ? 1 : -1));
    //console.log(data)
  };

  //console.log(agents);
  //console.log(agentInfos);

  return (
    <div className="main__container">
      <div className="sub__container">
        <div className="img__container">
          <img className="img__bg" src={imageBG} alt="BG"></img>
        </div>
        <div className="agents__header">
          <div className="wrapper">
            {agents.map((agent) => (
              <div
                key={agent.uuid}
                // onClick={(agentInfos) => setagentInfos(agent)}
              >
                <i className="h1__font">{agent.displayName.toUpperCase()}</i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>Agent Logo</div>

      <div>aaaaaa</div>
    </div>
  );
};

export default Header;
