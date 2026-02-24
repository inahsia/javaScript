import express from 'express'
import {placeOrderService} from '../services/orderService.js'




export const orderController = async (req, res) => {
  try {
    const { userId, productId, qty } = req.body;

    await placeOrderService(userId, productId, qty);

    res.status(201).json({
      message: "Order placed successfully"
    });

  } catch (err) {
    console.error("REAL ERROR:", err.message);

    res.status(400).json({
      message: err.message
    });
  }
};


