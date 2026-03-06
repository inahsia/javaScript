import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    uppercase:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  }
})

export const UserDb= mongoose.model('UserDb',userSchema);
// models/Task.js

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserDb",
      required: true,
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserDb",
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "IN_PROGRESS", "COMPLETED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Task=mongoose.model("Task", taskSchema);