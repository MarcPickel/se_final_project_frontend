import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchbar">
      <search>
        <form>
          <div>
            <input
              type="search"
              name="qeury"
              className="searchbar__input"
              id="bookSearch"
              placeholder="Search for books..."
            ></input>
            <button>
              <img />
            </button>
          </div>
        </form>
      </search>
    </div>
  );
}
