const express = require("express");
const router = express.Router();
const estadoController = require("../controllers/estadoController")

router.get("/estados", estadoController.findAll);

module.exports = router;