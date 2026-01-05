import "./Introduction.css";

import JoinButton from "../JoinButton/JoinButton.jsx";

import ship from "../../assets/old-style-ship-kenilworth-honorable-james-richmond.jpg";

function Introduction({ onSignUpClick }) {
  return (
    <section className="intro">
      <div className="intro-content">
        <img
          className="intro__image"
          src={ship}
          alt="Old style ship, 'Kenilworth', by James Richmond"
        />
        <h1 className="intro__title">Man's search for reading good books</h1>
        <div className="intro__column">
          <p className="intro__text">
            Jostled by a stormy sea of entertainment, man longs to find a true
            port.
            <span className="intro__text intro__text_orange">
              &#160;Man's Search For Reading&#160;
            </span>
            provides a safehaven for men to gather in friendship and discuss
            eternal truths rediscovered through the traditional pastime of
            reading good books.
          </p>
          <JoinButton onSignUpClick={onSignUpClick} />
        </div>
      </div>
    </section>
  );
}

export default Introduction;
