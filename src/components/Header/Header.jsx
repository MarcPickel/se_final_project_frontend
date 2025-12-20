import "./Header.css";

import { NavLink } from "react-router-dom";
// import { useContext } from "";
// import CurrentUserContext from "";

import logo from "../../assets/msfr-logo.svg";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="MSFR" />
      </NavLink>
      <h1 className="header__title"></h1>
    </header>
  );
}
