import { checkResponse } from "./api";

const register = (email, password, name, avatar) => {
  return new Promise((resolve, reject) => {
    resolve({
      email: "fake@example.com",
      password: "fakepass101",
      name: "fake user",
      image: "https://www.fakeimage.com",
    });
  });
};

const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
    });
  });
};

export { register, authorize, checkToken };
