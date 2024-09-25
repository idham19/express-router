const express = require("express");
const Fruits = require("../models/Fruit");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
