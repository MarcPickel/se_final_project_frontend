import "./Banner.css";

import odyssey from "../../assets/ulysses-and-the-sirens-waterhouse.jpg";

function Banner({ onSignUpClick }) {
  return (
    <>
      <img
        className="banner"
        src={odyssey}
        alt="Ulysses and the Sirens, John William Waterhouse, Pre-Raphaelite Brotherhood"
      />
      <button
        className="banner__act-button"
        type="button"
        onClick={onSignUpClick}
      >
        JOIN TODAY
      </button>
    </>
  );
}

export default Banner;
