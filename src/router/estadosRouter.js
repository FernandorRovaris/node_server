const express = require("express");
const router = express.Router();
const estadoController = require("../controllers/estadoController")

router.get("/estados", estadoController.findAll);
router.get("/estados/:id", estadoController.findbyId);
module.exports = router;