const testAuthLogin = {
  "email": "test@test.com",
  "password": "123456789"
};

const testAuthRegister = {
  "name": "Evan",
  "age": 2,
  "email": "test@test.com",
  "password": "123456789"
};

const testAuthRegisterAdmin = {
  "name": "Admin",
  "age": 2,
  "role":["admin"],
  "email": "admin@test.com",
  "password": "123456789"
};

const testStorageRegister = {
  url: "http://localhost:3001/file-test.mp3",
  filename: "file-test.mp3"
};

const testDataTrack = {
  name: "Ejemplo",
  album: "Ejemplo",
  cover: "http://image.com",
  artist: {
    name: "Ejemplo",
    nickName: "Ejemplo",
    nationality: "VE",
  },
  duration: {
    start: 1,
    end: 3,
  },
  mediaId: "",
};

module.exports = { testAuthLogin, testAuthRegister, testAuthRegisterAdmin, testDataTrack, testStorageRegister }
