import "./Library.css";

import SearchBar from "../SearchBar/SearchBar.jsx";
import BooksSection from "../BooksSection/BooksSection.jsx";

{
  /*import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";*/
}

function Library({ onCardClick, bookItems, onCardSave }) {
  return (
    <div className="library">
      <section className="library__sidebar">
        <SearchBar />
      </section>
      <section className="library__books-section">
        <BooksSection
          onCardClick={onCardClick}
          bookItems={bookItems}
          onCardSave={onCardSave}
        />
      </section>
    </div>
  );
}

export default Library;
