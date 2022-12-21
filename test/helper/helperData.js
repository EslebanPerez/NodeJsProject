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

module.exports = { testAuthLogin, testAuthRegister, testAuthRegisterAdmin }
