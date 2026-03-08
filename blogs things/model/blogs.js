import mongoose from "mongoose";

const taskUser=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  content:{
    type:String,
    required:true
  },
 userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},
{timestamps:true},
)

export const Task=mongoose.model("Task",taskUser);