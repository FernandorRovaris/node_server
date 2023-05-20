const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


//Chamar controller
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findById);
router.post("/users", userController.insert);
router.get("/auth", userController.auth);

module.exports = router;

