const express = require("express");
const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
    //   cart: JSON.stringify(req.body.cartItem),
    },
  });
  const lineItems = req.body.cartItem.map((item) => ({
    price_data: {
      currency: "gbp",
      product_data: {
        name: item?.drugId.name,
        description: item?.drugId.description,
        metadata: {
            id: item?.drugId.id
        },
        images: [item?.drugId.imageUrl],
      },
      unit_amount: Math.round(item.drugId.price.amount * 100),
    }, // Assuming each cart item has a priceId property
    quantity: item.quantity,
  }));
  try {
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      shipping_options: [
        { shipping_rate: "shr_1PHeyVKkamzZAA8QaAM1xPfD" },
        { shipping_rate: "shr_1PHezUKkamzZAA8QjPEMTXCO" },
      ],
      customer: customer.id,
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });

    res.send({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// stripe web hook
// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;

// endpointSecret =
//   "whsec_1898cd4a5842b39dac9a922e55074fb34e9715dada544ac8ddc2d312979b9230";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];

    let data;
    let eventType;

    if (endpointSecret) {
      let event;

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          sig,
          endpointSecret
        );
        console.log("webhook verified");
      } catch (err) {
        console.log(`webhook error: ${err.message}`);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object;
      eventType = event.type;
    } else {
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          console.log(customer);
          console.log("data:", data);
        })
        .catch((err) => console.log(err.message));
    }

    // Return a 200 res to acknowledge receipt of the event
    res.send().end;
  }
);

module.exports = router;
