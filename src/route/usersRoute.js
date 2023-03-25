const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


//Chamar controller
router.get("/users", userController.findAll);
router.post("/users", userController.insert)

module.exports = router;

