const request = require("supertest");
const app = require("../app");
const { tokenSign } = require("../utils/handleJwt");
const { userModel, storageModel } = require("../models");
const {
  testAuthRegisterAdmin,
  testDataTrack,
  testStorageRegister
} = require("./helper/helperData");
let STORAGE_ID = "";
let JWT_TOKEN = "";

beforeAll(async () => {
  await userModel.deleteMany({});
  await storageModel.deleteMany({});
  const user = await userModel.create(testAuthRegisterAdmin);
  const storage = await storageModel.create(testStorageRegister);
  STORAGE_ID = storage._id.toString();
  JWT_TOKEN = await tokenSign(user);
});

test("Debería registrar un tacks", async () => {
  const dataTracksNew = { 
    ...testDataTrack, 
    mediaId: STORAGE_ID };

  const res = await request(app)
    .post("/api/tracks")
    .set("Authorization", `Bearer ${JWT_TOKEN}`)
    .send(dataTracksNew)
  const { body } = res;
  expect(res.statusCode).toEqual(201);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.name");
  expect(body).toHaveProperty("data.artist");
  expect(body).toHaveProperty("data.cover");
});

