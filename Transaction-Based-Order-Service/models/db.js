import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  name: String
});

export const User = mongoose.model("User", userSchema);

const productSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  price: Number
});

export const Product = mongoose.model("Product", productSchema);



const orderSchema = new mongoose.Schema({
  userId: String,   
  productId: String,  
  quantity: Number,
  totalAmount: Number
});

export const Order = mongoose.model("Order", orderSchema);