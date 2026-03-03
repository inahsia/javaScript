import mongoose, { mongo } from 'mongoose'
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    uppercase:true
  },
  email:{
    type:String,
    required:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true,
  }
,
role:{
  enum:['user,admin']
}
},
{timestamps:true},
)

export const User=mongoose.model('User',userSchema);