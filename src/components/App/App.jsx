import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Navigation from "../Navigation/Navigation.jsx";

import Main from "../Main/Main.jsx";
import Library from "../Library/Library.jsx";
import Footer from "../Footer/Footer.jsx";

import { defaultSubject } from "../../utils/constants.js";
import {
  getSearch,
  filterSearchData,
  getBookCover,
  getSubject,
  filterSubjectData,
  getAuthor,
  getWork,
} from "../../utils/openLibraryApi.js";

function App() {
  const [activeSearch, setActiveSearch] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [bookItems, setBookItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  {
    /*
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

  useEffect(() => {
    getSubject(defaultSubject)
      .then((data) => {
        let filteredData = filterSubjectData(data);
        setBookItems(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/library"
            element={<Library bookItems={bookItems} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
