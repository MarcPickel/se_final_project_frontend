import "./Header.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

import logo from "../../assets/msfr__logo_small.svg";
import defaultAvatar from "../../assets/default-avatar.svg";

function Header() {
  //const { userData, isSignedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="MSFR" />
      </NavLink>
      <p className="header__title">Man's Search For Reading</p>

      <>
        <div className="header__user-content">
          <button className="header__signout-button" type="button">
            Sign Out
          </button>
          <p className="header__username">Marc Pickelman</p>
          <img
            className="header__avatar"
            src={defaultAvatar}
            alt="Marc Pickelman"
          />
        </div>
      </>
    </header>
  );
}

export default Header;
