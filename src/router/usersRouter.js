const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const estadoController = require("../controllers/estadoController")

//Chamar controller
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findById);
router.post("/users", userController.insert);
router.get("/auth", userController.auth);
router.get("estados", estadoController.findAll);

module.exports = router;

