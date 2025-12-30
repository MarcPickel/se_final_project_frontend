import "./BooksSection.css";

import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";

function BooksSection({ bookItems, onCardClick, onCardSave }) {
  return (
    <section class="books-section">
      <div className="cards">
        <ul className="cards__list">
          {(Array.isArray(bookItems) ? bookItems : [])
            .filter((item) => {
              return item?.title === (weatherData?.type ?? "");
            })
            .map((item) => {
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
    </section>
  );
}

export default BooksSection;
