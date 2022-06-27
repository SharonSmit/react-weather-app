import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather Search Engine</h1>
        <Search />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://www.sharonsmit.com" target="blank">
          Sharon Smit
        </a>
        and is{" "}
        <a
          href="https://github.com/SharonSmit/react-weather-app"
          target="blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
