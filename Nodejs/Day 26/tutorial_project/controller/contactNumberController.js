// @desc Get all contacts
// @route GET /number
// @access Public

export const createContactNumber=(req,res)=>{
  res.status(200).json({message:"Get all the contacts"});
}

// @desc Get all contacts
// @route GET /number/:id
// @access Public

export const get_Id_one_by_one=(req,res)=>{
    res.status(200).json({message:`i want to fetch ${req.params.id}`});
}


// @desc Get all contacts
// @route POST/number
// @access Public

export const createNumber=(req,res)=>{
  res.status(201).json({message:'just created a new contact man'});
}

// @desc Get all contacts
// @route DELETE/number/:id
// @access Public


export const deleteContact =(req,res)=>{
    res.status(204).json({message:`delete this  ${req.params.id}`});
}

// @desc Get all contacts
// @route PUT/number/:id
// @access Public

export const editContacts=(req,res)=>{
  res.status(200).json({message:`edit this ${req.params.id}`});
}




