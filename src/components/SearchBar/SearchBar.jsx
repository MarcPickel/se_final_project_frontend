import "./SearchBar.css";

import glass from "../../assets/magnifying-glass-icon.svg";

function SearchBar({
  inputValue,
  handleSearch,
  handleChange,
  isActive,
  setIsActive,
}) {
  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    setIsActive(false);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(inputValue);
  }

  return (
    <div className="searchbar">
      <search>
        <form onSubmit={handleSubmit}>
          <div
            className={`searchbar__container ${
              isActive ? "searchbar__container_active" : ""
            }`}
          >
            <input
              id="search-book"
              type="text"
              name="search"
              className="searchbar__input"
              placeholder="Search for books..."
              minLength="1"
              maxLength="30"
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
            <button className="searchbar__button" type="submit">
              <img
                className="searchbar__button-icon"
                src={glass}
                alt="search"
              />
            </button>
          </div>
        </form>
      </search>
    </div>
  );
}

export default SearchBar;
