import "./MyBooks.css";

import SavedBooks from "../SavedBooksSection/SavedBooksSection.jsx";

function MyBooks({ savedItems, onCardSave }) {
  return (
    <div className="my-books">
      <section className="my-books__saved-books-section">
        <SavedBooks savedItems={savedItems} onCardSave={onCardSave} />
      </section>
    </div>
  );
}

export default MyBooks;
