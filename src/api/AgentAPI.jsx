import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../pages/header/Header";

const AgentAPI = () => {
  const API = "https://valorant-api.com/v1/agents?isPlayableCharacter=True";

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(API);
    setAgents(data.data);
    //data.data.sort((a, b) => (a.id > b.id ? 1 : -1));
    //console.log(data)
  };

  //console.log(agents);
  return (
    <div>
      <Header getAgents={agents} />
    </div>
  );
};

export default AgentAPI;
