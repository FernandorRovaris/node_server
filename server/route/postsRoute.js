const express = require('express');
const router = express.Router();

router.get("/posts");
router.get("/posts/:id");
router.post("posts");




module.exports = router;
