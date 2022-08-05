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
      <div className="weapon__details__main">2</div>
    </>
  );
};

export default Arsenal;
