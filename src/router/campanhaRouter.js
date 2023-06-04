const express = require("express");
const router = express.Router();
const campanhaController = require("../controllers/campanhaController");
const fotosController = require("../controllers/fotoController");

router.post("/campanha", campanhaController.insert);
router.post("/campanha/:id/fotos", fotosController.insert);

module.exports = router;

