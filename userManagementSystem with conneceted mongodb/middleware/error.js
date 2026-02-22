export class AppError extends Error{
  constructor (message,status=500){
    super(message);
    this.status=status;
  }
}

export const notFound=(req,res,next)=>{
  res.status(404).json({
    success:false,
    error:"Route not found"
  });
};



export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};


