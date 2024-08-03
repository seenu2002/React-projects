import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
          Developed by{" "}
          Srinivasan Selvam
        | Visit In{" "}
        <a target="_blank" href="https://github.com/seenu2002">
          GITHUB
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
