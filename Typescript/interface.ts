interface User{
  readonly dbid:number
  email:string,
  UserId:number,
  googleId?:string
  startTrail:()=>string
  // startTrail():string
  getCoupon(couponname:string):number
}

// power of reopening of interface
interface User{
  githubToken:string

}

// if u are making a new datatyel and want ti extend usage for the previous user then you can do that 

interface Admin extends User{
  role:string
}


export{}
const userVariable:User={
  dbid:22 ,
  email:"singhaisahni2003@gmail.com",
  UserId:2211,
  startTrail:()=>{
    return "you got this"
  },getCoupon:(name:"aishani")=>{
    return 10;
  }
}
userVariable.email="hitesg";




// in interface you have inheritance, reopening etc




let add:string []=["aishani","singh","age"];

let Number=[number,string,]