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
      <div>
        <div className="card__image-container">
          <img className="card__image" src={item.cover} alt={item.title} />
          {/*currentUser.isLoggedIn && (
          <button
            className={`card__save-button ${
              isSaved ? itemSaveButtonClassName : ""
            }`}
            type="button"
            onClick={handleSave}
          ></button>
        )*/}
        </div>
        <h2 className="card__title">{item.title}</h2>
        <p className="card__text">{item.author}</p>
      </div>
    </li>
  );
}

export default ItemCard;
