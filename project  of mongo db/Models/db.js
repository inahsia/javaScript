import mongoose from "mongoose";
export const connectMongoDB=async(connectionURL)=>{
  const connection=await mongoose.connect(connectionURL);
  return connection;
};







// let str1="my name is aishani singh".split("");
// str1.forEach((e,i)=>{
//   if (e==="a" || e==="e" || e==="i" || e==="o" || e==="u"){
//     str1[i]=e.replace(e,"*");
//   }
//   console.log(str1.join(""));
// })

