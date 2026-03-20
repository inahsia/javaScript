import express from 'express'
import Stripe from "stripe";
import * as orderPlaced from '../service/order.service.js';
import { protect } from '../middleware/auth.middleware.js';
import Product from '../models/product.js';
import { createCheckoutSession } from '../service/stripeService.js';

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// ✅ CREATE PAYMENT
router.post('/create-payment', protect, async (req, res, next) => {
  try {

    const { items } = req.body;

    let totalAmount = 0;

    for (let item of items) {
      const product = await Product.findById(item.product);
      if (!product) throw new Error("Product not found");

      totalAmount += product.price * item.quantity;
    }

    const session = await createCheckoutSession(
      totalAmount,
      req.user._id,
      items
    );

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url
    });

  } catch (error) {
    next(error);
  }
});


// ✅ CHECK PAYMENT STATUS
router.get("/payment-status/:sessionId", protect, async (req, res) => {

  const session = await stripe.checkout.sessions.retrieve(
    req.params.sessionId
  );

  if (session.payment_status === "paid") {
    return res.json({
      success: true,
      message: "Payment Successful"
    });
  }

  res.json({
    success: false,
    message: "Payment not completed"
  });

});

export const orderRouter = router;