import "./BooksSection.css";

import ItemCard from "../ItemCard/ItemCard.jsx";
import Preloader from "../Preloader/Preloader.jsx";

import { useState, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function BooksSection({ bookItems, onCardClick, onCardSave, searchError }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [booksToShow, setBooksToShow] = useState(3);

  useEffect(() => {
    if (bookItems && bookItems.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setData(bookItems);
        setIsLoading(false);
        setBooksToShow(3);
      }, 3000);
    } else if (bookItems && bookItems.length === 0) {
      setIsLoading(false);
      setData([]);
      setBooksToShow(3);
    }
  }, [bookItems]);

  const handleShowMore = () => {
    setBooksToShow((prev) => prev + 3);
  };

  const displayedBooks = Array.isArray(data) ? data.slice(0, booksToShow) : [];
  const hasMoreBooks = Array.isArray(data) && data.length > booksToShow;
  const hasNoBooks = !isLoading && Array.isArray(data) && data.length === 0;

  return (
    <div className="books-section">
      <div className="books-section__content">
        {isLoading ? (
          <Preloader />
        ) : searchError ? (
          <p className="books-section__message">An error occurred</p>
        ) : hasNoBooks ? (
          <p className="books-section__message">Nothing found</p>
        ) : (
          <>
            <ul className="books-section__items">
              {displayedBooks.map((item) => {
                return (
                  <ItemCard
                    key={item.key}
                    item={item}
                    onCardClick={onCardClick}
                    onCardSave={onCardSave}
                  />
                );
              })}
            </ul>
            {hasMoreBooks && (
              <button
                className="books-section__show-more"
                type="button"
                onClick={handleShowMore}
              >
                Show More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BooksSection;
