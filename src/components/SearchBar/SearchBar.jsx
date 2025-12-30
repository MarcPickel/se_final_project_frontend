import "./SearchBar.css";

import glass from "../../assets/magnifying-glass-icon.svg";

function SearchBar() {
  return (
    <div className="searchbar">
      <search>
        <form>
          <div className="searchbar__container">
            <input
              type="text"
              name="search"
              className="searchbar__input"
              id="bookSearch"
              placeholder="Search for books..."
            ></input>
            <img className="searchbar__button-icon" src={glass} alt="search" />
          </div>
        </form>
      </search>
    </div>
  );
}

export default SearchBar;
