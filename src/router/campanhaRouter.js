const express = require("express");
const router = express.Router();
const campanhaController = require("../controllers/campanhaController");

router.post("/campanha", campanhaController.insert);

module.exports = router;

