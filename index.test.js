const request = require("supertest");
const { User } = require("./models/index");
const { seedUsers } = require("./seedData");
const app = require("./src/app");

describe("Users test", () => {
  test("Get users should return all users", async () => {
    const allUsers = await User.findAll();
    const response = await request(app).get("/users").expect(200);
    expect(response.body[0].name).toEqual(allUsers[0].name);
    expect(response.body[0].age).toEqual(allUsers[0].age);
  });
});