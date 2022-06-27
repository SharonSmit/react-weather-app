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
        This project was coded by
        <a
          href="https://github.com/SharonSmit/react-weather-app"
          target="blank"
        >
          Sharon Smit
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
