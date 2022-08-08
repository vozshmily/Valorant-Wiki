import React from "react";
import "../arsenal/Arsenal.css";

const Arsenal = () => {
  return (
    <>
      <div className="arsenal__main">
        <div className="arsenal__header">
          <div className="text__header">
            <h1 className="h1__font">CHOOSE YOUR WEAPON</h1>
          </div>
          <div className="filter__header">
            <form>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="weapon__details__main">
        <div className="weapon__card">
          <img
            src="https://media.valorant-api.com/weaponskins/94c085e6-48e1-c879-2552-88bf7850c5a8/displayicon.png"
            alt="Avatar"
          />
          <div className="weapon__container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arsenal;
