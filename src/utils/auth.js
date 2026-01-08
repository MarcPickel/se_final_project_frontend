import { checkResponse } from "./api";

let storedUser = {
  _id: "65f7371e7bce9e7d331b11a0",
  name: "default user",
  email: "fake@example.com",
  image:
    "https://media.licdn.com/dms/image/v2/D5622AQF47eAelmT-_w/feedshare-shrink_800/B56ZuUko5UHYAg-/0/1767724193059?e=1769644800&v=beta&t=Hpv91lIsZpPjKHgjmYdS914iLNG50NvRMr17jariyac",
};

const register = (email, password, name, image) => {
  return new Promise((resolve, reject) => {
    storedUser = {
      _id: "65f7371e7bce9e7d331b11a0",
      name: name,
      email: email,
      image: image,
    };

    resolve({
      email: email,
      password: password,
      name: name,
      image: image,
    });
  });
};

const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    resolve({
      token: "a fake token",
      user: recentUser,
    });
  });
};

const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    resolve(storedUser);
  });
};

export { register, authorize, checkToken };
