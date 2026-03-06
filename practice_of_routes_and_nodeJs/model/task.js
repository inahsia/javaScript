import mongoose from "mongoose";
export const taskSchema=new mongoose.Schema({
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
  enum:['pending','completed'],
  required:true
}
,
userId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
}
})

export const Task=mongoose.model("Task",taskSchema);

