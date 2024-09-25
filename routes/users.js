const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const getAllUsers = await User.findAll();
    res.json(getAllUsers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const findUserById = await User.findByPk(userId);
    res.json(findUserById);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await User.create(userData);
    res.json(newUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const findUser = await User.findByPk(userId);
    await findUser.update(userData);
    res.json(findUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;
    const findUser = await User.findByPk(userId);
    await findUser.destroy();
    const findAllUsers = await User.findAll();
    res.json(findAllUsers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
