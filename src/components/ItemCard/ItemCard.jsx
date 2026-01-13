import "./ItemCard.css";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ItemCard({ item, onCardClick, onCardSave, savedItems = [] }) {
  const currentUser = useContext(CurrentUserContext);

  const isSaved = savedItems.some((savedItem) => {
    if (item.key && savedItem.key) {
      return savedItem.key === item.key;
    }
    if (item._id && savedItem._id) {
      return savedItem._id === item._id;
    }
    return savedItem.title === item.title && savedItem.author === item.author;
  });

  const itemSaveButtonClassName = "card__save-button_active";

  const handleSave = (evt) => {
    evt.preventDefault();
    onCardSave(item);
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(item);
    }
  };

  return (
    <li className="card">
      <div>
        <div className="card__image-container">
          <img
            className="card__image"
            src={item.cover}
            alt={item.title}
            onClick={handleCardClick}
          />
          {currentUser.isSignedIn && (
            <button
              className={`card__save-button ${
                isSaved ? itemSaveButtonClassName : ""
              }`}
              type="button"
              onClick={handleSave}
            ></button>
          )}
        </div>
        <h2 className="card__title">{item.title}</h2>
        <p className="card__text">{item.author}</p>
      </div>
    </li>
  );
}

export default ItemCard;
