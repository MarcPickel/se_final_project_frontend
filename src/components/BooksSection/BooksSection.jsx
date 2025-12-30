import "./BooksSection.css";

import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function BooksSection() {
  return (
    <div class="books-section">
      <div>
        {userItems.length > 0 && (
          <ul className="books-section__items">
            {userItems.map((item) => {
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
        )}
      </div>
    </div>
  );
}

export default BooksSection;
