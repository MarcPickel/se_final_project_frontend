const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

// For the My Books page
function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        // Generated at random from a mongodb id
        // generator website.
        _id: "65f7368dfb74bd6a92114c85",
        title: "Some news article",
        url: "put some actual article URL here",
      },
      // Other objects gotten
    ])
  );
}

function saveBook(book) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: book.url,
      title: book.title,
      imageUrl: book.imagUrl,
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
