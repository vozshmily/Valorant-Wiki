import Abilities from "../Abilities/Abilities";
import "../cards/AgentCard.css";

const AgentCard = ({ getAgent }) => {
  //console.log(getAgent);
  return (
    <>
      <div className="agent__card__main">
        {!getAgent ? (
          ""
        ) : (
          <>
            <div className="agent__image">
              <img
                src={getAgent.fullPortraitV2}
                alt="icons"
                width={600}
                height={600}
              />
            </div>
            <div className="agent__info">
              <article className="about__card">
                <small>ROLE</small>
                <h5>
                  {getAgent.role.displayName.toUpperCase()}{" "}
                  <img
                    src={getAgent.role.displayIcon}
                    alt="icons"
                    width={30}
                    height={30}
                  />
                </h5>
                <small>BIOGRAPHY</small>
                <p>{getAgent.description}</p>
              </article>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AgentCard;
