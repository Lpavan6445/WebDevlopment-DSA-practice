const express = require("express");
const router = express.Router();

const Evaluation = require("../models/evaluation.model");
const crudController = require("./crud.controller");

router.post("", crudController(Evaluation).post);
router.get("", crudController(Evaluation).get);
router.get("/:id", crudController(Evaluation).getOne);
router.patch("/:id", crudController(Evaluation).updateOne);
router.delete("/:id", crudController(Evaluation).deleteOne);

module.exports = router;