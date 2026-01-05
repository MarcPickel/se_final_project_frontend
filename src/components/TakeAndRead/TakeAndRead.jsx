import "./TakeAndRead.css";

import JoinButton from "../JoinButton/JoinButton.jsx";
import augustine from "../../assets/saint_augustine_by_philippe_de_champaigne.jpg";

function TakeAndRead({ onSignUpClick }) {
  return (
    <section className="take-and-read">
      <div className="take-and-read-content">
        <img
          className="take-and-read__image"
          src={augustine}
          alt="St. Augustin of Hippo"
        />
        <div>
          <h2 className="take-and-read__subtitle">Tolle lege!</h2>
          <p className="take-and-read__text">
            Take up and read the good books of the Western Canon that have been
            passed down as part of our Western and Christian heritage for
            centuries.
          </p>
          <JoinButton onSignUpClick={onSignUpClick} />
        </div>
      </div>
    </section>
  );
}

export default TakeAndRead;
