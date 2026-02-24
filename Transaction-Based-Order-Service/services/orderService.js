import mongoose from 'mongoose'
import { Product, Order } from "../models/db.js";

export const placeOrderService=async(userId,productId,quantity)=>{
  const session=await mongoose.startSession();

  try{
    session.startTransaction();

    const product=await Product.findOneAndUpdate({_id:productId,stock:{$gte:quantity}},
      {$inc:{stock:-quantity}},
      {session,new:true}
    ).session(session);

    if(!product){
      throw new Error ("Product not found");
    }
    
    
    // const user = await User.findOneAndUpdate(
    //   { _id: userId, wallet: { $gte: totalAmount } },
    //   { $inc: { wallet: -totalAmount } },
    //   { session, new: true }
    // );
//  if (!user) {
//       throw new Error("Insufficient wallet balance");
//     }
    //now we reduce stock
    const totalAmount=product.price*quantity;
    await Order.create([
      {
        userId,
        productId,
        quantity,
        totalAmount,
      },
    ],
  {session}
  )

  await session.commitTransaction();
  session.endSession();
  return "Order placed"

  }
  catch(error){
    await session.abortTransaction();
    session.endSession();
    throw error;
  }

};

