import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import Main from "../Main/Main.jsx";
import Library from "../Library/Library.jsx";
import Footer from "../Footer/Footer.jsx";

import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import SignInModal from "../SignInModal/SignInModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

import useSearch from "../../hooks/useSearch.js";

import { defaultSubject, defaultParam } from "../../utils/constants.js";
import {
  getSearch,
  filterSearchData,
  getSubject,
  filterSubjectData,
  getWork,
  filterWork,
} from "../../utils/openLibraryApi.js";
import { editProfile } from "../../utils/api.js";
import * as auth from "../../utils/auth.js";

import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

import { setToken, getToken, removeToken } from "../../utils/token.js";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [bookItems, setBookItems] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const [userData, setUserData] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // State Variables for Library
  const defaultValue = "";
  const { inputValue, handleChange } = useSearch(defaultValue);

  const onClose = () => {
    setActiveModal("");
  };

  const onSignUpClick = () => {
    setActiveModal("signup");
  };

  const onSignInClick = () => {
    setActiveModal("signin");
  };

  const onEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
    if (card.key) {
      getWork(card.key)
        .then((workData) => {
          const filteredData = filterWork(workData);
          setSelectedCard({
            ...card,
            description: filteredData.description,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch work details:", error);
        });
    }
  };

  // Auth Handlers
  const handleSignUp = ({ email, password, name, image }) => {
    return auth
      .register(email, password, name, image)
      .then((registeredUser) => {
        console.log(registeredUser);
        return handleSignIn(registeredUser);
      });
  };

  const handleSignIn = ({ email, password }) => {
    if (!email || !password) {
      return Promise.reject("Email and password are required");
    }

    return auth.authorize(email, password).then((data) => {
      if (data.token) {
        console.log(data);
        setToken(data.token);
        setUserData(data.user);
        setIsSignedIn(true);
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
      .checkToken(token)
      .then((user) => {
        setIsSignedIn(true);
        setUserData(user);
      })
      .catch((err) => {
        console.error("Auth check failed:", err);
        removeToken();
        setIsSignedIn(false);
        setUserData(null);
      });
  }, []);

  // Edit Profile Handlers

  const handleEditProfile = (inputValues) => {
    const newUserData = {
      ...userData,
      name: inputValues.name,
      image: inputValues.image,
    };
    setUserData(newUserData);
    onClose();
  };

  {
    // This would be a good useEffect for the MyBooks Page,
    // because it would check the Database through the API to fetch the saved books
    /*useEffect(() => {
    const classics = "classics";

    getSubject(classics)
      .then((data) => {
        const itemsArray = Array.isArray(data?.data) ? data.data : [];
        setBookItems(itemsArray);
      })
      .catch(console.error);
  }, []);*/
  }

  // Search Functionability

  const handleSearch = (value) => {
    setSearchError(null);
    getSearch(defaultParam, value)
      .then((data) => {
        let filteredData = filterSearchData(data);
        setBookItems(filteredData);
      })
      .catch((error) => {
        const status = error.match(/\d+/)?.[0];
        if (status === "500" || status === "503") {
          setSearchError(true);
          setBookItems([]);
        }
      });
  };

  useEffect(() => {
    if (inputValue === "") {
      setSearchError(null);
      getSubject(defaultSubject)
        .then((data) => {
          let filteredData = filterSubjectData(data);
          setBookItems(filteredData);
        })
        .catch((error) => {
          const status = error.match(/\d+/)?.[0];
          if (status === "500" || status === "503") {
            setSearchError(true);
            setBookItems([]);
          }
        });
    }
  }, [inputValue]);

  return (
    <CurrentUserContext.Provider
      value={{ userData, isSignedIn, setIsSignedIn }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            onSignUpClick={onSignUpClick}
            onSignInClick={onSignInClick}
            onEditProfileClick={onEditProfileClick}
          />
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={<Main onSignUpClick={onSignUpClick} />}
            ></Route>
            <Route
              path="/library"
              element={
                <Library
                  bookItems={bookItems}
                  handleSearch={handleSearch}
                  inputValue={inputValue}
                  handleChange={handleChange}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  onCardClick={handleCardClick}
                  searchError={searchError}
                />
              }
            ></Route>
          </Routes>
          <Footer />

          <SignUpModal
            isOpen={activeModal === "signup"}
            onClose={onClose}
            handleSignUp={handleSignUp}
          />
          <SignInModal
            isOpen={activeModal === "signin"}
            onClose={onClose}
            handleSignIn={handleSignIn}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={onClose}
            handleEditProfile={handleEditProfile}
            editProfile={editProfile}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={onClose}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
