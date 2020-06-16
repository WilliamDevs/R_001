import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  const [query, setQuery] = useState("Sydney, au");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [country, setCountry] = useState("");
  const data = async (query) => {
    const apiRes = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=YourAPI"
    );
    const restJSON = await apiRes.json();
    return restJSON;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(data());
    data(query).then((res) => {
      console.log(res.main.temp);
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);
    });
  };
  useEffect(() => {
    data(query).then((res) => {
      console.log(res.main.temp);
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);
    });
  }, []);
  return (
    <div className="App">
      <WeatherCard
        temp={temp}
        condition={condition}
        city={city}
        country={country}
      />
      {/* <WeatherCard temp={13} condition="Rain" />
      <WeatherCard temp={-10} /> */}
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
