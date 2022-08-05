import React from "react";
import imageBG from "../../assets/agent-background-generic.JPG";
import videoBg from "../../assets/agent-background-generic.mp4";
import "../header/Header.css";
import axios from "axios";
import { useState, useEffect } from "react";
import AgentCard from "../../cards/AgentCard";
import Abilities from "../../Abilities/Abilities";

const Header = () => {
  const API = "https://valorant-api.com/v1/agents?isPlayableCharacter=True";

  const [agents, setAgents] = useState([]);
  const [agentInfos, setagentInfos] = useState();
  const [reset, setReset] = useState(false);
  // const [agentAbilities, setagentAbilities] = useState();

  useEffect(() => {
    fetchData();
  }, [reset]);

  const fetchData = async () => {
    const { data } = await axios.get(API);
    setAgents(data.data);
    data.data.sort((a, b) => (a.id > b.id ? 1 : -1));
    //console.log(data)
  };

  //console.log(agents);

  return (
    <>
      <div className="main__container">
        <div className="sub__container">
          <div className="img__container">
            <video src={videoBg} muted loop autoPlay></video>
          </div>

          <div className="agents__container">
            <div className="wrapper">
              {agents.map((agent) => (
                <div
                  key={agent.uuid}
                  onClick={() => {
                    setagentInfos(agent);
                    setReset(false);
                  }}
                >
                  <h5 className="h1__font">{agent.displayName}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AgentCard getAgent={agentInfos} />
      </div>
      <Abilities getAgent={agentInfos} getReset={reset} />
    </>
  );
};

export default Header;
