import mongoose from 'mongoose'
import Product from './product.js'
import User from './user.js'
const orderItemsSchema=new mongoose.Schema({
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
    required:true
  },
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  quantity:{
    type:Number,
    required:true,
    min:1
  }
},{timestamps:true},{_id:false})

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    items: {
      type: [orderItemsSchema],
      validate: v => v.length > 0
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0
    },

    status: {
      type: String,
      enum: ["pending", "paid", "cancelled", "shipped", "delivered"],
      default: "pending",
      index: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);