import "./Fraternity.css";

import openBook from "../../assets/open-book-icon.svg";
import flower from "../../assets/flower-icon.svg";
import heart from "../../assets/heart-icon.svg";
import JoinButton from "../JoinButton/JoinButton.jsx";

function Fraternity() {
  return (
    <section className="fraternity">
      <div className="fraternity-content">
        <h2 className="fraternity__subtitle">Literary fraternity</h2>
        <p className="fraternity__text">
          In the adventurous pursuit of the true, good, and beautiful, you will
          be joined by men just like you.
        </p>
        <div className="fraternity__row">
          <div className="fraternity__column">
            <div className="fraternity__circle fraternity__circle_red">
              <img
                className="fraternity__book-icon"
                src={openBook}
                alt="open book"
              />
            </div>
            <p className="fraternity__icon-text">Truth</p>
          </div>
          <div className="fraternity__column">
            <div className="fraternity__circle fraternity__circle_blue">
              <img className="fraternity__heart-icon" src={heart} alt="heart" />
            </div>
            <p className="fraternity__icon-text">Goodness</p>
          </div>
          <div className="fraternity__column">
            <div className="fraternity__circle fraternity__circle_orange">
              <img
                className="fraternity__flower-icon"
                src={flower}
                alt="flower"
              />
            </div>
            <p className="fraternity__icon-text">Beauty</p>
          </div>
        </div>
        <JoinButton />
      </div>
    </section>
  );
}

export default Fraternity;
