import "./SavedBooksSection.css";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";

function SavedBooksSection({ savedItems, bookItems, onCardSave }) {
  const { userData } = useContext(CurrentUserContext);

  const itemsToDisplay = savedItems || bookItems || [];
  const userItems = userData
    ? itemsToDisplay.filter((item) => item.owner === userData._id)
    : [];

  return (
    <div className="saved-books-section">
      {userItems.length > 0 ? (
        <ul className="saved-books-section__items">
          {userItems.map((item) => {
            return (
              <ItemCard
                key={item._id || item.key || item.title}
                item={item}
                onCardSave={onCardSave}
                savedItems={savedItems || []}
              />
            );
          })}
        </ul>
      ) : (
        <p>No saved books yet.</p>
      )}
    </div>
  );
}

export default SavedBooksSection;
