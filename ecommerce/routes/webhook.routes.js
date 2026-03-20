import express from "express";
import Stripe from "stripe";
import * as orderPlaced from "../service/order.service.js";
import dotenv from 'dotenv'
dotenv.config()   
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



router.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {

      const event = JSON.parse(req.body.toString());

      console.log("Webhook hit");
      console.log("Event type:", event.type);

      if (event.type === "checkout.session.completed") {

        const session = event.data.object;

        console.log("Payment successful");
        console.log("Session ID:", session.id);
        console.log("Metadata:", session.metadata);

        // get metadata
        const userId = session.metadata.userId;
        const items = JSON.parse(session.metadata.items);

        // create order in DB
        await orderPlaced.placeOrder(userId, items);

        console.log("✅ Order created in database");
      }

      res.status(200).json({ received: true });

    } catch (err) {
      console.error("Webhook error:", err);
      res.status(400).send("Webhook Error");
    }
  }
);


export default router;