import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Banner from "../Banner/Banner.jsx";
import Navigation from "../Navigation/Navigation.jsx";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Banner />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
