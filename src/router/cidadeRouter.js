const express = require("express");
const router = express.Router();
const cidadeController = require("../controllers/cidadeController")

router.get("/cidades", cidadeController.findAll);
router.get("/cidades/:id", cidadeController.findbyId);
module.exports = router;