import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [details, setDetails] = useState({});
  let [display, setDisplay] = useState(false);

  function displayWeather(response) {
    setDisplay(true);
    setDetails({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function showTemperature(event) {
    event.preventDefault();
    let apiKey = "9cb72bec958f8fb02391985ed7b219d2";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={showTemperature}>
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
        onChange={updateCity}
      />
      <input
        type="submit"
        value="Search"
        className="btn btn-primary"
        onClick={showTemperature}
      />
    </form>
  );

  if (display) {
    return (
      <div>
        {form}
        <h2>{city}</h2>
        <img src={details.icon} alt={details.description} />
        <ul className="List">
          <li>
            <strong>Temp</strong> {Math.round(details.temperature)}°C
          </li>
          <li>
            <strong>Description</strong> {details.description}
          </li>
          <li>
            <strong>Humidity</strong> {details.humidity}%
          </li>
          <li>
            <strong>Wind</strong> {details.wind}km/h
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
