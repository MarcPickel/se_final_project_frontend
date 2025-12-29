import "./SearchBar.css";

function SearchBar() {
  return (
    <div>
      <search>
        <form>
          <div>
            <input
              type="search"
              name="qeury"
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
