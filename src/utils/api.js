const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        // I just generated this at random from a mongodb id
        // generator website.
        _id: "65f7368dfb74bd6a92114c85",
        title: "Some news article",
        url: "put some actual article URL here",
        // ...etc, whatever properties it's supposed to have
      },
      // ...etc, more article objects, as many as you want
    ])
  );
}

function saveBook(book) {
  // article is a search result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: book.url, // Use the properties the newsAPI gives you, I just made these up
      title: book.title,
      imageUrl: book.imagUrl,
      // whatever other properties from the newsAPI-given article object you saved to the database
    });
  });
}

function editProfile({ name, image }) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      name: name.value,
      image: image.value,
    });
  });
}

export { checkResponse, getItems, saveBook, editProfile };
