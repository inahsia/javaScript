import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
  name:String,
  email:String
});

const productSchema=new mongoose.Schema({
  name:String,
  price:Number
});

const orerSchema=new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  items:[
    {
      product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
      },
     
    }
  ]
})


export const User=mongoose.model("User",userSchema);
