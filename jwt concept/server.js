import express from 'express'
import bcrypt from 'bcrypt'
const app=express();
app.use(express.json());
const users=[]
app.get('/users',(req,res)=>{
  res.json(users);
})

app.post('/users',async(req,res,next)=>{
  try{
    const salt=await bcrypt.genSalt();
    const hashPassword=await bcrypt.hash(req.body.password,salt);
    console.log('salt');
    console.log(hashPassword);
    const user={name:req.body.name,password:hashPassword}
    users.push(user);
    res.status(201).json({message:"created"})
  }
  catch(err){
    return next(new Error('there is some error'))
  }
})

app.post('/users/login',async(req,res,next)=>{
  const user=users.find((e)=>e.name===req.body.name)
  if (user==null){
    return next(new Error('there is some error'));
  }
  try{
    bcrypt.compare(user.password,req.body.password);
    res.status(200).send("works");
  }
  catch(error){
   res.status(404).json({message:"bro you got an error"});
  }
})



app.listen(3000,()=>{
  console.log(`port is running on 3000`);
})