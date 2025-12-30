import "./SearchBar.css";

import useSearch from "../../hooks/useSearch.js";
import { useEffect } from "react";
import glass from "../../assets/magnifying-glass-icon.svg";

function SearchBar({ activeSearch }) {
  const defaultValue = { search: "" };
  const { value, setValue, handleChange } = useSearch(defaultValue);

  useEffect(() => {
    if (activeSearch)
      setValue({
        search: value || "",
      });
  }, [activeSearch]);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div className="searchbar">
      <search>
        <form>
          <div className="searchbar__container">
            <input
              id="search-book"
              type="text"
              name="search"
              className="searchbar__input"
              placeholder="Search for books..."
              minLength="1"
              maxLength="30"
              value={value.search}
              onChange={handleChange}
            ></input>
            <img className="searchbar__button-icon" src={glass} alt="search" />
          </div>
        </form>
      </search>
    </div>
  );
}

export default SearchBar;
