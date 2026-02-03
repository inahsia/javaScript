// let price=500;
// price="500";//

// solution 
let price:number=500;
price=1000;
// ================================================
let loggedIn:any=false;
loggedIn=1;

//=================================================
let value:number|string|boolean;
// ================================================

// Write a function that:Takes a string
// Returns the length of the string

function getLength(a:string){
  return a.length;
}

getLength("aishani");

// ===================================================
// function add(num1, num2) {
//   return num1 + num2;
// }

function add(num1:number,num2:number):number{
  return num1+num2;
}

// void vs never

// if we talk about void =>this function finishes normally and does not return a value

// never=> is like literally for undefined , if function never finshes
function throwsError(msg:string){
  throw new Error(msg);

}

// we should use 


function throwError(msg:string):never{
  throw new Error(msg);
}


// ===================================================
// if we got a function getUsername
function getUsername(user){
  return user.name;
}

// implies
function getUsername(user:{name:string}):string{
  return user.name;
}

// ===================================================
// function getEmail(user){
//   return user.email;
// }

function getEmail(user:{email:string}):string{
  return user.email;
}


// ==================================================

// Objects with multiple properties

// function getUserInfo(user){
//   return user.name+""+user.age
// }

function getUserInfo(user:{name:string;age:number}):string{
  return user.name+""+user.age;
}

// ==================================================
// now we have optional property
// function getPhone(user:{name:string}){
//   return user.phone;
// }


function getPhone(user:{name:string;phone?:number}):string|undefined{
  return user.phone;
}


// ===================================================
// Create a type User and use it in a function.
// Aliases
type User={
  name:string,
  email:string,
  isActive:boolean;
};
function printUser(user:User){
  console.log(user.name);
}


// ===================================================
// practice
// id should not be changeable
// age may or may not exist 
type Admin={
  readonly id:number,
  name:string;
  age?:number;
}

// array 
// Create:
// Array of numbers
// Array of strings

let score:number[]=[1,2,3,4,5];
let name:string[]=["aishani","riya","kirat"];


type active={
  name:string;
  email:string;
  phone?:number;
};
let users:active[]=[
  {name:"Aishani",email:"singhaishani"},
  { name: "John", email: "j@j.com" }
]


// ===================================================
// if u got no return type then u can use
// void
// function printId(id:number){
//   console.log(id);
// }
function printId(id:number|string):void{
  console.log(id);
}

// union with functions 

// return type union
function getResult(flag: boolean) {
  if (flag) {
    return "Success";
  }
  return 404;
}

// solution 
function getResult(flag:boolean):string|number{
  if(flag){
    return "success";
  }
  return 404;
}

// union Types + function
function printId(id:number|string){
    if (typeof(id)==="string"){
      return id.toUpperCase();
    }

}


// ================================================
//tuple
// Create a tuple:

// username → string

// age → number

// isAdmin → boolean

let userInfo:[string,number,boolean];
userInfo=["aishani",21,true]


// ================================================
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}



// ================================================
// literal union types
// let status:string;
// status="done";

// let status:"pending"|"done"|"failed"
// status="done"


// ================================================
//enum is used to define a set of named constand values


enum status{
  pending,done,failed}

  function setStatus(attribute:status){
    if (attribute===status.pending){}
  }

enum Direction {
  Up,     
  Down,   
  Left,   
  Right   
}


//=================================================
//interface 
interface User{
  name:string;
  email:string;
}
interface Admin extends User{
  role:string;
}