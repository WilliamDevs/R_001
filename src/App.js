import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={30} condition="Clear" />
      <WeatherCard temp={13} condition="Rain" />
      <WeatherCard temp={-10} />
    </div>
  );
}

export default App;
