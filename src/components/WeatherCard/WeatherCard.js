import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";

const WeatherCard = (props) => {
  const red = 100;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to bottom, rgba(${red}, 200, 200), pink);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location />
      <img className="icon" src="./img/Sunny.png" alt="Weather Icon" />
      <h1 className="temp">20 C</h1>
      <h3 className="condition">Sunny</h3>
    </Card>
  );
};

export default WeatherCard;