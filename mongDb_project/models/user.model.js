import {Schema,model} from 'mongoose'


const userSchema=new Schema({
name: {
  type: String,
  uppercase: true
},
  email:{
    type:String,
    required:true,
    unqiue:true
  },
  password:{
    type:String,
    required:true
  }
},

)

export const user = model("user", userSchema);
