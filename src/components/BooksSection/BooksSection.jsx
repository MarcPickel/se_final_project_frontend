import "./BooksSection.css";

import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function BooksSection({ bookItems, bookData, onCardClick, onCardSave }) {
  return (
    <div className="books-section">
      <div>
        <ul className="books-section__items">
          {(Array.isArray(bookItems) ? bookItems : []).map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardSave={onCardSave}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BooksSection;
