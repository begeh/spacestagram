import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./helpers";
import { useState } from "react";

export default function MainPage() {
  const [spacegram, setSpacegram] = useState();

  useEffect(() => {
    fetchData(setSpacegram);
  }, []);

  console.log(spacegram);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
