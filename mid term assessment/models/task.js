import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["Pending","Completed"]
  }
  ,
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  }


},
{timestamps:true}
)

export const Task=mongoose.model("Task",taskSchema);
