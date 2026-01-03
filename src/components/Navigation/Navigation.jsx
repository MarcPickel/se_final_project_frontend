import "./Navigation.css";

import { NavLink, useLocation } from "react-router-dom";

import swords from "../../assets/swords-icon-white.svg";
import feather from "../../assets/feather-icon-white.svg";
import bookmark from "../../assets/bookmark-icon-white.svg";
import book from "../../assets/book-icon-white.svg";
import calendar from "../../assets/calendar-icon-white.svg";
import compass from "../../assets/compass-icon-white.svg";

function Navigation() {
  const location = useLocation();

  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path === "/library") return "library";
    if (path === "/mybooks") return "mybooks";
    if (path === "/thisyears") return "thisyears";
    if (path === "/warriorpoets") return "warriorpoets";
    if (path === "/faq") return "faq";
    if (path === "/about") return "about";

    return "";
  };

  const currentActiveTab = getActiveTabFromPath();

  return (
    <nav className="nav">
      <NavLink to="/library">
        <button
          className={`nav__button ${
            currentActiveTab === "library" ? "nav__button_active" : ""
          }`}
          type="button"
        >
          <img className="nav__button-icon" src={book} alt="Book" />
          Library
        </button>
      </NavLink>
      <NavLink to="/mybooks">
        <button
          className={`nav__button ${
            currentActiveTab === "myBooks" ? "nav__button_active" : ""
          }`}
          type="button"
        >
          <img className="nav__button-icon" src={bookmark} alt="Bookmark" />
          My Books
        </button>
      </NavLink>
      <NavLink to="/thisyears">
        <button
          className={`nav__button ${
            currentActiveTab === "thisYears" ? "nav__button_active" : ""
          }`}
          type="button"
        >
          <img className="nav__button-icon" src={calendar} alt="Calendar" />
          This Year's
        </button>
      </NavLink>
      <NavLink to="/warriorpoets">
        <button
          className={`nav__button ${
            currentActiveTab === "warriorPoets" ? "nav__button_active" : ""
          }`}
          type="button"
        >
          <img className="nav__button-icon" src={swords} alt="Swords" />
          Warrior Poets
        </button>
      </NavLink>
      <NavLink to="/faq">
        <button
          className={`nav__button ${
            currentActiveTab === "faq" ? "nav__button_active" : ""
          }`}
          type="button"
        >
          <img className="nav__button-icon" src={compass} alt="Compass" />
          FAQ
        </button>
      </NavLink>
      <NavLink to="/about">
        <button
          className={`nav__button ${
            currentActiveTab === "about" ? "nav__button_active" : ""
          }`}
          type="button"
        >
          <img className="nav__button-icon" src={feather} alt="Feather" />
          About
        </button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
