import {placeOrder} from '../service/orderService.js'

export const placeOrderService = async (req,res) => {

  try{

    const {userId, productId, qty} = req.body;

    await placeOrder(userId,productId,qty);

    res.json({message:"Order placed successfully"});

  }catch(err){
     throw Error("error");
  }

};