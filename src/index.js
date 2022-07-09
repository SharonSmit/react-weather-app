import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div>
          <Weather defaultCity="Leiden" />
        </div>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.sharonsmit.com"
            target="blank"
            rel="noopener noreferrer"
          >
            Sharon Smit 👩‍🚀
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SharonSmit/react-weather-app"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
