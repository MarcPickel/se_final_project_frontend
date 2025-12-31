import { checkResponse } from "./api.js";

// Various Open Library APIs

// General Search - Search API

// param = q, title, or author

export const getSearch = () => {
  return fetch(`https://openlibrary.org/search.json?${param}=${value}`).then(
    checkResponse
  );
};

// Filter Book Data from General Search API

export const filterSearchData = (data) => {
  const result = {};
  result.title = data.title;
  result.author = data.author_name;
  result.cover = data.cover_edition_key;
  result.work = data.key;
};

// Search Covers - Search API

export const getBookCover = () => {
  return fetch(
    `https://covers.openlibrary.org/b/olid/${cover_edition_key}.jpg`
  ).then(checkResponse);
};

// const cover_edition_key = OL51694024M;

// example: https://covers.openlibrary.org/b/olid/OL51694024M.jpg

// Search by Subject - Subject API

// param = book, author, subject

export const getSubject = () => {
  return fetch(`https://openlibrary.org/subjects/${value}.json?limit=50`).then(
    checkResponse
  );
};

// Search by Author - Author API

export const getAuthor = () => {
  return fetch(`https://openlibrary.org/search/authors.json?q=${value}`).then(
    checkResponse
  );
};

// Search by Work - Works API

export const getWork = () => {
  return fetch(`https://openlibrary.org/works/${key}.json`).then(checkResponse);
};

// key example: "key":"/works/OL27448W" - OL number is key

// Notes: If a book or books are searched, whichever book it is ought to have that same information on it from the API.
// So, to get the cover and description, pass that information onto the ItemModal.
