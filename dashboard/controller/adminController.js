import express from 'express'

router.post("/register",async(req,res,next)=>{
  try{
  const user=await createinfo.register(req.body);
  res.status(201).json({message:"successfully entered"});
  }
  catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
})

router.post("/login",async(req,res,next)=>{
  try{
    const user=await createinfo.login(req.body);
    res.status(200).json(
      user
    );
  }
  catch(error){
    res.status(400).json({
      message:error.message
    })
  }

})

export const adminController=router;
