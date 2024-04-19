const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");


router.post("/signup", controller.register);
router.post("/login", controller.login);
router.get("/all", controller.findAll);


module.exports = router;