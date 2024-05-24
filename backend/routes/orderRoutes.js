const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderController");

router.get("/user/:userId", controller.findByUserId);
router.get("/:orderId", controller.findOrderById);

module.exports = router;
