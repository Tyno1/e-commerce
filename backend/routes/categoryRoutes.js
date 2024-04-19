const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");


router.get("/all", controller.findAll);
router.post("/", controller.create);
router.get("/:id", controller.findById);


module.exports = router;