import React from "react";
import "../abilities/Abilities.css";

const Abilities = () => {
  return (
    <div className="abilities__container">
      <div className="agent__logo__card">
        <img
          src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png"
          alt="skill1"
          width={250}
          height={250}
        ></img>
      </div>
      <div className="logo-and-disciption__container">
        <div>
          <div className="abilities-logo__container">
            <img
              src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png"
              // onClick={(skills) => getSkills(agent.abilities.displayName)}
              alt="skill1"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="abilities-logo__container">
            <img
              src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png"
              // onClick={(skills) => getSkills(agent.abilities.displayName)}
              alt="skill1"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="abilities-logo__container">
            <img
              src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png"
              // onClick={(skills) => getSkills(agent.abilities.displayName)}
              alt="skill1"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="abilities-logo__container">
            <img
              src="https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/abilities/grenade/displayicon.png"
              // onClick={(skills) => getSkills(agent.abilities.displayName)}
              alt="skill1"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="abilities-info__container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro
            laudantium consequatur in nemo, odit facilis modi debitis rem
            dignissimos sapiente voluptates ad totam velit quam illum odio fuga.
            Debitis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
