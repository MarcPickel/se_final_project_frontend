import "./ItemCard.css";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function ItemCard({ item, onCardClick, onCardSave }) {
  const currentUser = useContext(CurrentUserContext);

  const isSaved = "";
  const itemSaveButtonClassName = "card__save-button_active";

  const handleSave = (evt) => {
    evt.preventDefault();
    onCardSave(item);
  };

  const handleCardImageClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <div className="card__info">
        <img
          className="card__image"
          src="https://covers.openlibrary.org/b/id/14627564-M.jpg"
        />
        {currentUser.isLoggedIn && (
          <button
            className={`card__save-button ${
              isSaved ? itemSaveButtonClassName : ""
            }`}
            type="button"
            onClick={handleSave}
          ></button>
        )}
        <h2 className="card__title">The Two Towers</h2>
        <p className="card__text">J.R.R. Tolkien</p>
      </div>
    </li>
  );
}

export default ItemCard;
