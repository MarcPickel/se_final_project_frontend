import "./SideBar.css";

function SideBar() {
  const { userData, isSignedIn } = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__mybooks-container">
        {!isSignedIn ? (
          <></>
        ) : (
          <div>
            <p>Filter by status</p>
            <button type="button">Yet to read</button>
            <button type="button">Reading</button>
            <button type="button">Read</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
