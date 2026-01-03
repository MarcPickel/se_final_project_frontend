import "./Library.css";

import SearchBar from "../SearchBar/SearchBar.jsx";
import BooksSection from "../BooksSection/BooksSection.jsx";

import { useEffect } from "react";

{
  /*import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";*/
}

function Library({
  onCardClick,
  bookItems,
  inputValue,
  handleSearch,
  onCardSave,
  handleChange,
  isActive,
  setIsActive,
}) {
  // Auto Scroll to Top on Page Entry
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="library">
      <section>
        <SearchBar
          handleSearch={handleSearch}
          handleChange={handleChange}
          inputValue={inputValue}
          isActive={isActive}
          setIsActive={setIsActive}
        />
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
