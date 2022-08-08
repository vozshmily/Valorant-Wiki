import React from "react";
import "../arsenal/Arsenal.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Arsenal = () => {
  const API = "https://valorant-api.com/v1/weapons";

  const [weapons, setWeapons] = useState([]);

  // const [agentAbilities, setagentAbilities] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(API);
    setWeapons(data.data);
    data.data.sort((a, b) => (a.id > b.id ? 1 : -1));
  };

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
        {weapons.map((weapon) => (
          <div className="weapon__card">
            <img
              className="image__icon"
              src={weapon.displayIcon}
              alt="Avatar"
            />
            <div className="weapon__container">
              <h2>{weapon.displayName}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Arsenal;
