import { checkResponse } from "./api.js";

// Various Open Library APIs

// General Search - Search API

// param = q, title, or author

export const getSearch = (param, value) => {
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

export const getBookCover = (cover_edition_key) => {
  return fetch(
    `https://covers.openlibrary.org/b/olid/${cover_edition_key}.jpg`
  ).then(checkResponse);
};

// cover_edition_key: OL51694024M;
// example: https://covers.openlibrary.org/b/olid/OL51694024M.jpg

// cover_id: 240727
// example: https://covers.openlibrary.org/b/id/240727-M.jpg

// Search by Subject - Subject API

// param = book, author, subject

export const getSubject = (value) => {
  return fetch(`https://openlibrary.org/subjects/${value}.json?limit=50`).then(
    checkResponse
  );
};

export const filterSubjectData = (data) => {
  return data.works.map((work) => ({
    title: work.title,
    author: work.authors?.[0]?.name || work.authors?.name || "Unknown Author",
    cover: work.cover_edition_key
      ? `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}.jpg`
      : `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
    key: work.key,
  }));
};

// Search by Author - Author API

export const getAuthor = (value) => {
  return fetch(`https://openlibrary.org/search/authors.json?q=${value}`).then(
    checkResponse
  );
};

// Search by Work - Works API

export const getWork = (key) => {
  return fetch(`https://openlibrary.org/works/${key}.json`).then(checkResponse);
};

// key example: "key":"/works/OL27448W" - OL number is key

// Notes: If a book or books are searched, whichever book it is ought to have that same information on it from the API.
// So, to get the cover and description, pass that information onto the ItemModal.
