import mongoose from "mongoose";
import { product, wallet, order } from "../models/database.js";

export const placeOrder = async (userId, productId, qty) => {

  const session = await mongoose.startSession();

  try {

    await session.withTransaction(async () => {


      const Product = await product.findById(productId).session(session);
      if (!Product) throw new Error("Product not found");


      if (Product.stock < qty)
        throw new Error("Not enough stock");

      const total = Product.price * qty;

      const userWallet = await wallet.findOne({ userId }).session(session);

      if (!userWallet || userWallet.balance < total)
        throw new Error("Insufficient balance");


      await product.updateOne(
        { _id: productId },
        { $inc: { stock: -qty } },
        { session }
      );


      await wallet.updateOne(
        { userId },
        { $inc: { balance: -total } },
        { session }
      );


      await order.create([{
        userId,
        productId,
        qty,
        total
      }], { session });

    });



  } catch (err) {



  } finally {

    session.endSession();

  }

};