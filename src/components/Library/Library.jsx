import "./Library.css";

import SearchBar from "../SearchBar/SearchBar.jsx";
import BooksSection from "../BooksSection/BooksSection.jsx";

import { useEffect } from "react";

function Library({
  onCardClick,
  bookItems,
  inputValue,
  handleSearch,
  onCardSave,
  handleChange,
  isActive,
  setIsActive,
  searchError,
  savedItems,
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
          searchError={searchError}
          savedItems={savedItems}
        />
      </section>
    </div>
  );
}

export default Library;
