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
      <section>
        <SearchBar />
      </section>
      <section>
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
