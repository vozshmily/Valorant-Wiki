import React, { useState, useEffect } from "react";
import "./Abilities.css";

const Abilities = ({ getAgent }, { getReset }) => {
  const [skills, getSkills] = useState();
  const [update, setUpdate] = useState();

  console.log(getReset);
  return (
    <div className="abilities__container">
      {!getAgent ? (
        ""
      ) : (
        <>
          <div className="agent__logo__card">
            <img
              src={getAgent.background}
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
                    onClick={() => {
                      getSkills(agent);
                      setUpdate();
                    }}
                    alt="skill1"
                    width={50}
                    height={50}
                  ></img>
                </div>
              ))}

              <div className="abilities-info__container">
                {!getReset ? (
                  <>
                    <h1>Q - {getAgent.abilities[0].displayName}</h1>
                    <p>{getAgent.abilities[0].description}</p>
                  </>
                ) : (
                  <>
                    {!skills ? (
                      ""
                    ) : (
                      <>
                        <h1>{skills.displayName}</h1>
                        <p>{skills.description}</p>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Abilities;
