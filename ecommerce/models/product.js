import mongoose from 'mongoose'
const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    index:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    min:0
  },
  category:{
  type: String,
  required: true,
  index: true
},
stock:{
  type:Number,
  required:true,
  min:0
},

isActive:{
  type:Boolean,
  default:true
}},
{timestamps:true}
);
productSchema.index({price:1,category:1});
export default mongoose.model('Product',productSchema);