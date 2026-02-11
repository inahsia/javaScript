import fs from 'node:fs'
export const customMiddlerware=function customMiddlerware(req,res,next){
  console.log('I am custom middlerware');
  next();
}

export const fileMiddleware=function (req,res,next){
  const log=`[${Date.now()}] ${req.method} ${req.path}`;
  fs.appendFileSync('log.txt',log,'utf-8');
  next();
}
