import React from "react";
import "./Abilities.css";

const Abilities = ({ getAgent }, { defaultSkill }) => {
  console.log(defaultSkill);
  return (
    <div className="abilities__container">
      {!getAgent ? (
        ""
      ) : (
        <>
          <div className="agent__logo__card">
            <img
              src={getAgent.displayIcon}
              alt="LOGO"
              width={250}
              height={250}
            ></img>
          </div>
          <div className="logo-and-disciption__container">
            <div>
              {getAgent.abilities.slice(0, 4).map((agent) => (
                <div className="abilities-logo__container">
                  <img
                    src={agent.displayIcon}
                    // onClick={(skills) => getSkills(agent.abilities.displayName)}
                    alt="skill1"
                    width={50}
                    height={50}
                  ></img>
                </div>
              ))}

              <div className="abilities-info__container">
                <h1>{getAgent.abilities[0].displayName}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  porro laudantium consequatur in nemo, odit facilis modi
                  debitis rem dignissimos sapiente voluptates ad totam velit
                  quam illum odio fuga. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Fugit porro laudantium consequatur in nemo,
                  odit facilis modi debitis rem dignissimos sapiente voluptates
                  ad totam velit quam illum odio fuga.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Abilities;
