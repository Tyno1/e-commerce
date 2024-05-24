const Order = require("../models/order");
const { sendEmail } = require("../controllers/mailersendController");

module.exports.createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: Items,
    subtotal: data.amount_subtotal / 100,
    total: data.amount_subtotal / 100,
    shipping: data.customer_details,
    delivery_status: data.payment_status,
  });
  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);

    const recipientEmail = savedOrder.shipping.email;
    const recipientName = savedOrder.shipping.name;
    const subject = "Medikart Order Confirmation";
    const text = `Congratulations. Your Order has been successfully Processed. Find details about your order below`;
    const productsHtml = savedOrder.products.map(
      (product) =>
        `<ul key="${product.drugId}">
        <li>
          <p>Drug Name: ${product?.name}</p>
          <p>Price: ${product?.price}</p>
          <p>Quantity: ${product?.quantity}</p>
        </li>
      </ul>`
    );
    const html = `<strong>Your Order has been successfully Processed</strong>
      <div>${productsHtml}</div>
      <div>Total: ${savedOrder.total}</div>
      `;

    sendEmail(recipientEmail, recipientName, subject, html, text);
  } catch (err) {
    console.log(err);
  }
};

module.exports.findByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.find({ userId }).populate("products.drugId");
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error finding orders by userId:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports.findOrderById = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const order = await Order.findById(orderId).populate("products.drugId");
    res.status(200).json(order);
  } catch (error) {
    console.error("Error finding order by orderId:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
