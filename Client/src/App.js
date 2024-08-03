import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Project from "./Components/Project";
import "./i18n";
function App() {
  return (
    <BrowserRouter>
      <Project />
    </BrowserRouter>
  );
}

export default App;
