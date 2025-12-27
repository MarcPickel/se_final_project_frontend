import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Navigation from "../Navigation/Navigation.jsx";

import Main from "../Main/Main.jsx";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
