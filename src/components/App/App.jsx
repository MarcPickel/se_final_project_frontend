import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Navigation from "../Navigation/Navigation.jsx";

import Main from "../Main/Main.jsx";
import Library from "../Library/Library.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  {
    /*const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const [userData, setUserData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignupClick = () => {
    setActiveModal("signup");
  };

  const onSigninClick = () => {
    setActiveModal("signin");
  };

  const onRegisterClick = () => {
    onClose();
    setActiveModal("signup");
  };

  const onSwitchToSignInClick = () => {
    onClose();
    setActiveModal("signin");
  };

  // Auth Handlers
  const handleSignup = ({ email, password, name, avatar }) => {
    return auth.register(email, password, name, avatar).then(() => {
      return handleSignin({ email, password });
    });
  };

  const handleSignin = ({ email, password }) => {
    if (!email || !password) {
      return Promise.reject("Email and password are required");
    }

    return auth.authorize(email, password).then((data) => {
      if (data.token) {
        setToken(data.token);
        setUserData(data.user);
        setIsLoggedIn(true);
        onClose();
      }
    });
  };

  // Check User's JWT
  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    auth
      .getUserInfo(token)
      .then((user) => {
        setIsLoggedIn(true);
        setUserData(user);
      })
      .catch((err) => {
        console.error("Auth check failed:", err);
        removeToken();
        setIsLoggedIn(false);
        setUserData(null);
      });
  }, []);

  // Edit Profile Handlers
  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const onEditProfile = (inputValues) => {
    const newUserData = {
      ...userData,
      name: inputValues.name,
      avatar: inputValues.avatar,
    };
    setUserData(newUserData);
    onClose();
  };*/
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
