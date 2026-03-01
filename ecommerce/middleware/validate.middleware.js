export const validate=(schema)=>{
  return (req,res,next)=>{
    const {error,value}=schema.validate(req,ReportBody,{
      abortEarly: false,   // show all errors
      stripUnknown: true   // remove unknown fields
    });
        if (error) {
      return res.status(400).json({
        success: false,
        message: error.details.map(err => err.message)
      });
    }
    req.body=value;
    next();
  }
}