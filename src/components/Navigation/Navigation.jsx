import "./Navigation.css";

import swords from "../../assets/swords-icon-white.svg";
import feather from "../../assets/feather-icon-white.svg";
import bookmark from "../../assets/bookmark-icon-white.svg";
import book from "../../assets/book-icon-white.svg";
import calendar from "../../assets/calendar-icon-white.svg";
import compass from "../../assets/compass-icon-white.svg";

function Navigation() {
  return (
    <nav className="nav">
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src={book} alt="Book" />
        Library
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src={bookmark} alt="Bookmark" />
        My Books
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src={calendar} alt="Calendar" />
        This Year's
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src={swords} alt="Swords" />
        Warrior Poets
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src={compass} alt="Compass" />
        FAQ
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src={feather} alt="Feather" />
        About
      </button>
    </nav>
  );
}

export default Navigation;
