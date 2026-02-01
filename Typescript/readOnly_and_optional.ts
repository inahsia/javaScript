type User={
  readonly _id:String;   //so that nobody can manipulation
//  this at all
  name:string;
  email:String;
  isActive:boolean;
   creaditCardDetails?:number;  //to make things optional
}


let myUser:User={
  _id:"123456",
  name:"h",
  email:"aishani@gmail.com",
  isActive:false
}


myUser.email="lol@gmail.com";
myUser._id="this_is_the_concept_of_readonly";


// if you want to include both returntypes
type cardNumber={
  cardNumber:string
}
type cardDate={
  cardDate:string
}

// the type will be
type cardDetails=cardNumber & cardDate & {
cvv:number
}

export {}