import React from 'react';

const WeatherCard = (props) => {
    return (  
        <div className="card">
            <div className="location">
            <h1 className="city">Missouri</h1>
            <h3 className="country">North America</h3>
            </div>
            <img className="icon" src="./img/mostly_cloudy.png" alt="Weather Icon"/>
            <h1 className="temp">20 C</h1>
            <h3 className="condition">Sunny</h3>  
        </div>
    );
}

 
export default WeatherCard;