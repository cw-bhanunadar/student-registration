const express = require("express");
const router = express.Router();
const studentOperations = require("../services/studentOperation");

router.post("/", async function (req, res, next) {
  try {
    res.json(await studentOperations.create(req.body));
  } catch (err) {
    console.error(`Error while creating student`, err.message);
    next(err);
  }
});

router.get("/", async function (req, res, next) {
  try {
    res.json(await studentOperations.getAll());
  } catch (err) {
    console.error(`Error while fetching student detail`, err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await studentOperations.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating student detail`, err.message);
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await studentOperations.markDelete(req.params.id));
  } catch (err) {
    console.error(`Error while deleting student detail`, err.message);
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await studentOperations.get(req.params.id));
  } catch (err) {
    console.error(`Error while fetching student detail`, err.message);
    next(err);
  }
});
module.exports = router;
