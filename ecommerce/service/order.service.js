import mongoose from 'mongoose'
import Product from '../models/product.js'
import Order from '../models/order.js'

export const placeOrder = async (userId, items) => {

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    let totalAmount = 0;
    const orderItems = [];

    for (let item of items) {

      const product = await Product.findOneAndUpdate(
        {
          _id: item.product,
          stock: { $gte: item.quantity }
        },
        {
          $inc: { stock: -item.quantity }
        },
        {
          new: true,
          session
        }
      );

      if (!product) {
        throw new Error("Product not found or insufficient stock");
      }


      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity
      });

      totalAmount += product.price * item.quantity;
    }


    const order = await Order.create(
      [{
        user: userId,
        items: orderItems,
        totalAmount
      }],
      { session }
    );

    await session.commitTransaction();
    return order;

  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};