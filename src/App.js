import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=48ee2728a5c8d1781a1ea9984f428b0e"
    );
    const restJSON = await apiRes.json();
    return restJSON;
  };
  console.log(data());
  data().then((res) => console.log(res));
  return (
    <div className="App">
      <WeatherCard temp={30} condition="Clear" />
      <WeatherCard temp={13} condition="Rain" />
      <WeatherCard temp={-10} />
    </div>
  );
}

export default App;
