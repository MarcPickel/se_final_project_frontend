import "./Navigation.css";

import swords from "../../assets/swords-icon.svg";
import feather from "../../assets/feather-icon.svg";
import bookmark from "../../assets/bookmark-icon.svg";
import book from "../../assets/book-icon.svg";
import home from "../../assets/home-icon.svg";

function Navigation() {
  return (
    <nav className="nav">
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src="" alt="" />
        Library
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src="" alt="" />
        My Books
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src="" alt="" />
        This Year's
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src="" alt="" />
        Wisdom & Virtue
      </button>
      <button className="nav__button" type="button">
        <img className="nav__button-icon" src="" alt="" />
        About
      </button>
    </nav>
  );
}

export default Navigation;
