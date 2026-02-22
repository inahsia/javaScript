import { database } from "../userManagementSystem/stores";

const user= new mongoose.Schema({
  title:String,
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  tags:[String],
  metadata:{
    views:Number,
    likes:Number
  }
})

//now we have got a schema
const User=mongoose.model("User",user);

//i can perform this 
User.create()
User.find()
User.findById()
User.updateOne()
User.deleteOne()


//types of validation 
// ->its like what happens before saving to database
// build-in validation 
email:{
  type:String,
  required :true,
  match: /.+\@.+\..+/  
}


// custom validation 
age:{
  type:Number,
  validate:{
    validator:function(val){
      return val>=18;
    },
    message:"User must be adult"
  }
}

email:{
  type:String,
  validate:{
    validator:async function (value){
      const exists=await user.findOne({email:value})

    },
    message
  }
}

//Schema Methods (Business Logic)
User.methods.isAdult=function(){
  return this.age>=18;
}
//static methods
User.statics.findByEmail=function (email){
  return this.findOne({email});
}


// ===================================================================

const studentSchema=new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  email:{
    required:true,
    unique:true,
    match: /.+\@.+\..+/
  },
  age:{
    type:Number,
    min:18,
    max:60
  },
  course:{
    type:String,
    enum:["maths","science"]
  },
  joinAt:{
    type:Date,
    default:Date.now
  }

})
//====================================================================
const product=new mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      min:1
    },
    discount:{
      type:Number,
      validate:function(value){
        return value < this.price;
      },
      message:"Discount must be less than price"

    }
  ,
  stock:{
    type:Number,
    default:0,
  },
  category:{
    type :String,
    enum:["electronics","clothing","food"]
  }
  }
);
export const Product=mongoose.model("Product",product);

//====================================================================
const UserSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    match:/.+\@.+\..+/
  },
  password:{
    type:String,
    minlength:8,
    required:true
  },
  role:{
    type:String,
    default:"user"
  },
  createdAt:{
    type:Date,
    default:Date.now
  }

});
UserSchema.methods.isAdmin=function(){
  return this.role==="admin";

};

//======================================================================
//different types of schema
flat
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});
nested 

const userSchema=new mongoose.Schema({
  name:String,
  address:{
    city:String,
    state:String,
    pincode:Number
  }
});
//subdoc schema 
const addressSchema=new mongoose.Schema({
  city:String,
  state:String
});
const userSchema = new mongoose.Schema({
  name: String,
  address: addressSchema
});

//array of subdoc 
const commentSchema=new mongoose.Schema({
  text:string,
  createdAt:Date
});
const postSchema=new mongoose.Schema({
  title:String,
  comments:[commentSchema]
})






//======================================================================
const userSchema=new mongoose.Schema({
  name:String,
  email:string
});

export const user=mongoose.model("user",userSchema);

const postSchema=new mongoose.Schema({
  title:String,
  content:String,
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
});
export const Post = mongoose.model("Post", postSchema);

const posts=await Post.find().populate("author");
//=================================================================================

import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({

  name:String,
  age:Number,
  email:String
})


const User=mongoose.model("User",userSchema)

await User.create({name:"Aishani",age:22});
const users=await User.find();

age:{
  type:Number,
  default:18}

email:{
  type:String,
  required:true
}

email:{
  type:String,
  unique:true
}


// required
name: { type: String, required: true }

age: { type: Number, min: 18, max: 60 }

password: { type: String, minlength: 6 }

email: {
  type: String,
  match: /.+\@.+\..+/
}

role: {
  type: String,
  enum: ["admin", "user"]
}

//validate before save

// custom validator 
age:{
  type:Number,
  validate:function (value){
    return value>=18;
  },
  message:"Age must be 18+"
}

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },

  age: {
    type: Number,
    min: 18,
    max: 60
  },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
  _id:{
    default:Null
  }

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

//every collection has automatic index on


// index concept is a very important concept
db.users.createIdex({email:1})
// 1->ascending
//-1->descending

db.users.createIndex({age:1,city:1})

// ============================================================================================================================================================================================================================================================================================================================================================


import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
  name:string,
  age:Number,
  email:String
})

// real schema

name:{
  type:String,
  required:true
},
age:{
  type:Number,
  min:18
},
email:{
  type:String,
  required:true,
  unique:true
}

role:{
  type:String,
  enum:["user","admin"],
  default:"user"
}
//now i am going to make model
const User=mongoose.model("User",userSchema);


// ======================================================================================

const userSchema=new mongoose.Schema({
  username:String,
  required:true,
  minlength:3,
  maxlength:20,
  trim:true
},

email:{
  type:string,
  required:true,
  unique:true,
  lowercase:true,
  match:/^\S+@\S+\.\S+$/
},
password:{
  type:String,
  required:true,
  minlength:6
},
role:{
  string:String,
  enum:["user","admin","moderator"],
  default:"user"
},
createdAt:{
  type:Date,
  default:Date.now
}

)

// ====================================================================================
//Product Schema
title:{
  type:String,
  required:true,
  trim:true
},
price:{
  type:Number,
  required:true,
  min:1
},
category:{
  type:String,
  enum:["electronics","clothing","books","food"]

},
stocks:{
  type:Number,
  default:0,
  min:0,
}

stock:{
  type:Number,
  default:0,
  min:0
}

password:{
  type:String,
  required:true,
  validate:{
    validator:function(value){
      return /^(?=.*[A-Za-z])(?=.*\d)/.test(value);
    },
    message:"Password must contain at least one letter and one number"
  }
}