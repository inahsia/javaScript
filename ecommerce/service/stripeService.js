import Stripe from "stripe";
import dotenv from 'dotenv'
dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (amount, userId, items) => {

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ["card"],

    mode: "payment",

    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "Order Payment",
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],

    success_url: "http://localhost:5000/success",
    cancel_url: "http://localhost:5000/cancel",

    metadata: {
      userId: userId.toString(),
      items: JSON.stringify(items)
    }

  });

  return session;
};