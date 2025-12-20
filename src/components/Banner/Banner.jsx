import "./Banner.css";

import LibraryBanner from "../../assets/ulysses-and-the-sirens-waterhouse.jpg";

function Banner() {
  return (
    <>
      <img
        className="banner"
        src={LibraryBanner}
        alt="Ulysses and the Sirens, John William Waterhouse, Pre-Raphaelite Brotherhood"
      />
      <button className="banner__act-button" type="button">
        JOIN TODAY
      </button>
    </>
  );
}

export default Banner;
