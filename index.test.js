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

  test("Get user by id ", async () => {
    const userId = 1;
    const findUserById = await User.findByPk(userId);
    const response = await request(app).get(`/users/${userId}`).expect(200);
    expect(response.body.name).toEqual(findUserById.name);
    expect(response.body.age).toEqual(findUserById.age);
  });

  test("Post request add new user", async () => {
    const mockData = {
      name: "lara",
      age: 36,
    };
    const response = await request(app)
      .post("/users")
      .send(mockData)
      .expect(200);
      expect(response.body.name).toEqual(mockData.name)
      expect(response.body.age).toEqual(mockData.age)
  });
});
