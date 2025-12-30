import { checkResponse } from "./api.js";

// Various Open Library APIs

// General Search - Search API

// params = q, title, author

export const getSearchResults = () => {
  return fetch(`https://openlibrary.org/search.json?${param}=${value}`).then(
    checkResponse
  );
};

// Search Covers - Search API

export const getBookCover = () => {
  return fetch(`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`).then(
    checkResponse
  );
};

const cover_i = 14627564;

// Search by Subject - Subject API

// params = book, author, subject

export const getSubjectResults = () => {
  return fetch(`https://openlibrary.org/${param}/${value}.json?limit=50`).then(
    checkResponse
  );
};

// Search by Author - Author API

export const getAuthorResults = () => {
  return fetch(`https://openlibrary.org/search/authors.json?q=${value}`).then(
    checkResponse
  );
};

export const filterBookData = (data) => {
  const result = {};
};
