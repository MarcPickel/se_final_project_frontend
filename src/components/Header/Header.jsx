import "./Header.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { removeToken } from "../../utils/token";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

import logo from "../../assets/msfr__logo_small.svg";
import defaultImage from "../../assets/default-avatar.svg";

function Header({ onSignUpClick, onSignInClick, onEditProfileClick }) {
  const { userData, isSignedIn, setIsSignedIn } =
    useContext(CurrentUserContext);
  const navigate = useNavigate();

  function signOut() {
    removeToken();
    navigate("/");
    setIsSignedIn(false);
  }

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="MSFR" />
      </NavLink>
      <p className="header__title">Man's Search For Reading</p>
      {isSignedIn ? (
        <>
          <div className="header__user-content">
            <button
              className="header__sign-button"
              type="button"
              onClick={signOut}
            >
              Sign Out
            </button>
            <p className="header__username">{userData.name}</p>
            <img
              className="header__profile-image"
              src={userData.image}
              alt={userData.name}
              onClick={onEditProfileClick}
            />
          </div>
        </>
      ) : (
        <>
          <div className="header__sign-container">
            <button
              onClick={onSignUpClick}
              type="button"
              className="header__sign-button"
            >
              Sign Up
            </button>
            <button
              onClick={onSignInClick}
              type="button"
              className="header__sign-button"
            >
              Sign In
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
