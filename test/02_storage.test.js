const request = require("supertest");
const app = require("../app");
const { userModel, storageModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { testAuthRegisterAdmin } = require("./helper/helperData");
let JWT_TOKEN = "";
const filePath = `${__dirname}/dump/track.mp3`;

beforeAll(async () => {
  await userModel.deleteMany({});
  await storageModel.deleteMany({});
  const user = await userModel.create(testAuthRegisterAdmin);
  JWT_TOKEN = await tokenSign(user);
});

describe("[STORAGE] esta es la prueba de /api/storage", () =>{
  test("Subir un archivo con autorización para admin", async () => {
    const res = await request(app)
      .post("/api/storage")
      .set("Authorization", `Bearer ${JWT_TOKEN}`)
      .attach("myfile", filePath);
    const { body } = res;
    expect(res.statusCode).toEqual(201);
    expect(body).toHaveProperty("data");
    expect(body).toHaveProperty("data.url");
  });
});