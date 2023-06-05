const express = require("express");
const router = express.Router();
const campanhaController = require("../controllers/campanhaController");
const fotosController = require("../controllers/fotoController");

router.post("/campanha", campanhaController.insert);
router.post("/campanha/:id/fotos", fotosController.insert);
router.get("/campanha", campanhaController.findAll);

module.exports = router;

