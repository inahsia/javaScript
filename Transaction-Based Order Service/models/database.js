import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
  name:String,
  stock:Number,
  price:Number
})

export const product=mongoose.model("product",productSchema);

const walletSchema=new mongoose.Schema({
  userId:String,
  balance:Number
})

export const wallet=mongoose.model("wallet",walletSchema);

const orderSchema=new mongoose.Schema({
  userId:String,
  productId:String,
  qty:Number,
  total:Number
},{timestamps:true})

export const order=mongoose.model("order",orderSchema);
