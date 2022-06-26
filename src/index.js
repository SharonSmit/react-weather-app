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
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
