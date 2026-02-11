import expressAsyncHandler from "express-async-handler";
// @desc Get all contacts
// @route GET /api/contacts
// @access Public

export const  getContact=expressAsyncHandler(async (req,res)=>{
  res.status(200).json({message:"Get all the contacts"});
});

// @desc create all contacts
// @route  POST/api/contacts
// @access Public

export const createContact=expressAsyncHandler(async(req,res)=>{
  console.log("The data which is created is",req.query);
  const {name,place,phone_number}=req.body;
  if (!name||!place||!phone_number){
    res.status(400);
    throw new Error.json({message:"all fields are mandatory"})
  
  }
  res.status(201).json({message:"get all contacts"});
});

// @desc Get all contacts
// @route GET /api/contacts
// @access Public

export const getContact_by_id=expressAsyncHandler(async(req,res)=>{
  res.status(200).json({message:`Get ${req.params.id} the contacts`});
});

// @desc create all contacts
// @route  POST/api/contacts
// @access Public

export const editContact_by_id=expressAsyncHandler(async(req,res)=>{
  res.status(201).json({message:`update this particular ${req.params.id}`});
});

export const deleteContact=expressAsyncHandler(async(req,res)=>{
  res.status(204).json({message:`deleted the ${req.params.id}`})
});



