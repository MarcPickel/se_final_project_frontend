import "./WisdomVirtue.css";

import knight from "../../assets/adolphe-schreyer-man-with-lance-riding-through-the-snow.jpg";

function WisdomVirtue() {
  return (
    <section className="wisdom-virtue">
      <div className="wisdom-virtue-content">
        <h2 className="wisdom-virtue__subtitle">Wisdom and virtue</h2>
        <div className="wisdom-virtue__row">
          <p className="wisdom-virtue__text">
            Learn from our literary forefathers what truly makes for an
            exemplary man, one who has put on the armor of wisdom and armed
            himself with virtue.
          </p>
          <img className="wisdom-virtue__image" src={knight} alt="" />
        </div>
      </div>
    </section>
  );
}

export default WisdomVirtue;
