const express = require("express");
const router = express.Router();
const controller = require("../controllers/drugController");

router.get("/all", controller.findAll);
router.get("/search", controller.findDrugsByName);
router.get("/category/:categoryId", controller.findByCategoryId);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.delete("/:id", controller.deleteById);

module.exports = router;
