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

export const errorHandler=(err,req,res,next)=>{
  console.log("Error",err.message);
  res.status(err.status || 500).json({
    success:false,
    error:err.message ||"server Error"
  });
};
