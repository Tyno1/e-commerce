const express = require("express");
require("dotenv").config();
const router = express.Router();
const controller = require("../controllers/stripeController");


router.post("/create-checkout-session", controller.create);

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  controller.webhook
);

module.exports = router;
