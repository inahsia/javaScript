import jwt from 'jsonwebtoken'
export const generateToken=(email,userId)=>{
  const token=jwt.sign({email,userId},
    process.env.SECRET,{
      expiresIn:'1h'
    }
  )
  return token;
}


export const middleware=(req,res,next)=>{
  const token=req.headers.authorization?.split(" ")[1];
   if(!token){
    res.status(401).json({message:"token missing"});
   }
   const decoded=jwt.verify(token,process.env.SECRET);
   req.user=decoded;
   next();
}

//if we include req.user.role
export const authorizeRole = (roles) => {
  return (req, res, next) => {

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    next();
  };
};