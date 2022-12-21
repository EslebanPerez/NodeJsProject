const request = require("supertest")
const app = require("../app");
const {userModel} = require("../models")

const testAuthLogin = {
  "email": "test2@test.com",
  "password": "123456789"
}

const testAuthRegister = {
  "name": "Evan",
  "age": 2,
  "email": "test@test.com",
  "password": "123456789"
}
/**
 * Instrucción que se ejecutara antes de todas las pruebas
 * para que las pruebas no generen problema
 * y a la vez las pruebas no dependan de lo que se ha guardado en 
 * la DB
 */
beforeAll(async() => {
  await userModel.deleteMany()
})

describe("[AUTH] esta es la prueba de /api/auth", () =>{

  test("Fallo para iniciar sesión para usuario inexistente", async() => {
    const response = await request(app)
    .post("/api/auth/login")
    .send(testAuthLogin)
    expect(response.statusCode).toEqual(404)
  });

  test("Registro de un usuario satisfactoriamente", async() => {
    const response = await request(app)
    .post("/api/auth/register")
    .send(testAuthRegister)
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("data")
    expect(response.body).toHaveProperty("data.token")
    expect(response.body).toHaveProperty("data.user")
  });

})
