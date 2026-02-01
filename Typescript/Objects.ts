const User={
  name:"Aishani Singh",
  email:"singhaishani2003@gmail.com",
  isActive:true
}


function createUser():{name:string,isPaid:boolean,email:any}{
  return {name:"aishani",isPaid:false,email:"aishani@gmail.com"};
}


// function createUser({name:string,ispaid:boolean}){}
// let newUser={name:"aishani",ispaid:false,email:"aishani@gmail.com"}
// createUser(newUser);

// Type Aliases
type User={
  name:string;
  email:string;
  isActive:boolean
}
function createOf(user:User):User{
  return {name:"",email:"",isActive:true}
}


export{}



