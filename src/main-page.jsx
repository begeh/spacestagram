import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./helpers";
import { useState } from "react";
import SpaceGram from "./components/spacegram-card";

export default function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <SpaceGram />
      </header>
    </div>
  );
}
