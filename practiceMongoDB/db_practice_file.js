                  // practice from chat gpt
                              // |
// https://chatgpt.com/share/699af18e-7ab0-800b-a988-172abd0aca12




import mongoose from "mongoose";



await mongoose.connect("mongodb+srv://admin:admin@cluster0.a9dvost.mongodb.net/?appName=Cluster0");

console.log("Mongo Connected");




const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
  salary: Number,
  skills: [String]
});

const User = mongoose.model("User", userSchema);


// Insert many users

/*
await User.insertMany([
{ name:"Rahul", age:22, role:"dev", salary:4000, skills:["js","node"] },
{ name:"Aman", age:28, role:"manager", salary:7000, skills:["management"] },
{ name:"Neha", age:19, role:"intern", salary:1500, skills:["html","css"] },
{ name:"Sara", age:32, role:"dev", salary:6000, skills:["python","django"] },
{ name:"John", age:25, role:"dev", salary:5000, skills:["js","react"] }
]);
console.log("Inserted");
*/



// SECTION 2 — BASIC FIND


// Get all users

// const data = await User.find();
// console.log(data);


// Find one user

const rahul = await User.findOne({name:"Rahul"});
console.log(rahul);



/* =========================================================
SECTION 3 — PROJECTION
========================================================= */

// Return only name + age
/*
const result = await User.find({}, "name age");
console.log(result);
*/


/* =========================================================
SECTION 4 — COMPARISON OPERATORS
========================================================= */

// age > 25
/*
console.log(await User.find({age:{$gt:25}}));
*/

// salary <= 5000
/*
console.log(await User.find({salary:{$lte:5000}}));
*/

// role not dev
/*
console.log(await User.find({role:{$ne:"dev"}}));
*/

// role in list
/*
console.log(await User.find({role:{$in:["dev","intern


/* =========================================================
SECTION 5 — LOGICAL OPERATORS
========================================================= */

// age>20 AND salary>4500

// console.log(await User.find({
//   $and:[
//   {age:{$gt:20}},
//   {salary:{$gt:4500}}
// ]
// }));


// role dev OR manager
/*
console.log(await User.find({
 $or:[
  {role:"dev"},
  {role:"manager"}
 ]
}));
*/


/* ========================================================="]}}));
*/
// SECTION 6 — ELEMENT OPERATORS
// ========================================================= */

// salary field exists
/*
console.log(await User.find({salary:{$exists:true}}));
*/


/* =========================================================
SECTION 7 — ARRAY QUERIES
========================================================= */

// exactly 2 skills
/*
console.log(await User.find({skills:{$size:2}}));
*/

// has js + node
/*
console.log(await User.find({skills:{$all:["js","node"]}}));
*/

// contains react
/*
console.log(await User.find({skills:{$in:["react"]}}));
*/


/* =========================================================
SECTION 8 — SORT + LIMIT
========================================================= */

// sort salary ascending
/*
console.log(await User.find().sort({salary:1}));
*/

// top 2 highest salary
/*
console.log(await User.find().sort({salary:-1}).limit(2));
*/


/* =========================================================
SECTION 9 — PAGINATION
========================================================= */

// page = 2, limit = 2
/*
const page=2;
const limit=2;

const result = await User.find()
.sort({_id:-1})
.skip((page-1)*limit)
.limit(limit);

console.log(result);
*/


/* =========================================================
SECTION 10 — UPDATE
========================================================= */

// increase Rahul salary
/*
await User.updateOne(
 {name:"Rahul"},
 {$inc:{salary:500}}
);
*/

// multiply dev salaries
/*
await User.updateMany(
 {role:"dev"},
 {$mul:{salary:2}}
);
*/

// add mongodb skill
/*
await User.updateOne(
 {name:"Rahul"},
 {$addToSet:{skills:"mongodb"}}
);
*/

// rename salary -> income
/*
await User.updateMany({},{$rename:{salary:"income"}});
*/


/* =========================================================
SECTION 11 — DELETE
========================================================= */

// delete Rahul

// await User.deleteOne({name:"Rahul"});


// // delete all interns

// await User.deleteMany({role:"intern"});


// /*now we are on indexes
// */

// userSchema.index({email:1});
//  or 
// await User.collection.createIndex({email:1});
// or //
// email:{
//   type:String,
//   unique:true
// }

// const all=await User.find()
// console.log(all);


// //example of compund index
// //role
// //salary
// userSchema.index({role:1,salary:-1})

// // /* ========================================================= */


// // //now the concept of pagination 
// // //questions

// // //return all developers with salary >5000

// const salary =await User.find({
//   role:"dev",
//   salary:{gt:5000}
// })
// console.log(salary);

// //now the projection 
// // return only name and salary

// const project=await User.find({},"name salary");

// //now question of pagination 
// //page=3
// //limit=5
// // there is a concept of skip also came from 
// // (pages-1)*limit

// // const pagination =await User.find().skip(2).limit();


// // // Return:
// // // only dev users
// // // sorted by salary descending
// // // page 2 limit 3

// const concept=await User.find({
//   role:"dev"
// }).sort({salary:-1}).skip(3).limit(3);


// // best practices of data modeling 

// // ->Make name and email required.
// name:{
//  type:String,
//  required:true
// },
// email:{
//  type:String,
//  required:true
// }
// // ->trim spaces automatically
// name:{
//  type:String,
//  trim:true
// }
// //->store lowercase email
// email:{
//   type:String,
//   lowercase:true
// } 
// //->restrict role values
// role:{
//  type:String,
//  enum:["admin","user","dev"]
// }

// //now staring with the transaction 


// //  Key Queries Recap///

// // Here’s a simple cheat sheet of the queries you’ll use for transactions, atomic operations, and multi-document consistency:

// // Action	Query
// // Start a session	const session = await mongoose.startSession();
// // Begin transaction	await session.withTransaction(async () => { ... });
// // Commit transaction	await session.commitTransaction();
// // Abort transaction	await session.abortTransaction();
// // End session	session.endSession();
// // Increment a field	await Model.updateOne({ _id: id }, { $inc: { field: 10 } });
// // Push to an array	await Model.updateOne({ _id: id }, { $push: { field: "value" } });
// // Add unique value to array	await Model.updateOne({ _id: id }, { $addToSet: { field: "value" } });
// // Set a field	await Model.updateOne({ _id: id }, { $set: { field: "newValue" } });
// // Remove a field	await Model.updateOne({ _id: id }, { $unset: { field: "" } });
// // Multiply a field	await Model.updateOne({ _id: id }, { $mul: { field: 2 } });
// // Rename a field	await Model.updateOne({ _id: id }, { $rename: { oldField: "newField" } });
// // Update multiple documents	await Model.updateMany({ condition }, { $set: { field: "value" } });



// // $inc	Increment (or decrement) a numeric value.
// // $push	Add an element to an array.
// // $addToSet	Add an element to an array if it’s not already present (ensures uniqueness).
// // $set	Set a value for a field.
// // $pull	Remove an element from an array.
// // $unset	Remove a field from a document.
// // $mul	Multiply a numeric value.

// //increase user's age 
// await User.updateOne(
//   {_id: userId},
//   {$inc:{age:1}}

// )

// // add skill to User Profile 
// await User.updateOne(
//   {_id:userId},
//   {$addToSet:{skills:"Nodejs"}}
// );

// //set address for User
// await User.updateOne({
//   _id:userId
// },
// {$set:{defaultAddress:"123 Main St"
// }}
// );

// //remove skill from User Profile 
// await User.updateOne(
//   {_id:userId},
//   {$pull:{skills:"javaScript"}}
// )

// // increment product's Stocks after sale
// await User.updateOne(
//   {_id:productId},
//   {$inc:{stock:10}}
// )

// //add a new reviews to  product
// await User.updateOne(
//   {_id:productId},
//   {$push:{reviews:"great product!"}}
// ) ;

// //update Users profile pictures 
// await User.updateOne(
//   {_id:userId},
//   {$set:{profilePicture:"newImage.jpg"}}
// );

// //decrease product price if discount applied
// await User.updateOne(
//   {_id:productId},
//   {$mul:{price:0.8}}
// )

// await User.updateOne(
//   {_id:userId},
//   {$unset:{defaultAddress:""}}
// );
// await User.updateOne(
//   { _id: cartId },
//   { $addToSet: { items: productId } }
// );








// now i will start with mongoose and its queries

// insertOne()
// return type is Promise<insertOneResult>
// {
//   acknowledged: true,
//   insertedId: ObjectId("...")
// }

const userSchema=new mongoose.Schema({
------------
})
const user=mongoose.model("user",userSchema);
await user.create({name:"aishani",age:22})



const studentSchema=new mongoose.Schema({
  name:string,
  exams:[
    {
      subject :String,
      score:Number,
      passed:Boolean
    }
  ]
});

user.find({
  exams:{
    $elemMatch:{
      score:{$lt:50},
      passed:false
    }
  }
})

