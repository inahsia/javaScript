function add(a:number,b:number){
  return a+b;
}

let age:number=22;


let score:number|string=22;
score="hundred"

//function returning string
function greet(name:string){
  return `my name is ${name} `
}

let price:number=99;


//boolean function 
function isAdult(age:number):boolean{
  return age>=18;
}


// let data:any=10;
// data.toUpperCase();
let data: unknown;
if(typeof data==="string"){
  data.toUpperCase();
}

// functions
function add(a:number,b:number){
  return a+b;
}


// if we want to have concept of optional 
// we shall use name?:
function greet1(name?:string)
{
  return null;
}

// we even got a default param
function power(base:number,exp:number=2){
}


//arrow function
const sum=(a:number,b:number):number=>{
  return a+b;
}


// best way of writing a function
type MathFn=(a:number,b:number)=>number;


// objects
//objects without typing allow extra properties
function print(user){
  console.log(user.name)
}

function print(user:{name:string}){
  return user.name
}


//one more method that u can do is 
// phele is u should define object properties

type User={
  name:string,
  age:number;
  height?:number
}

function print(user:User){
  return user.age,user.age;
}

// aliases is like reusable object shapes
type User={
  id:number;
  name:string;
}


//we also use not a very great practice
type Admin=User &{role:string};

//readonly and optional
type User1={
  readonly id:number;
  name?:string;
}

const user:User1={id:1}
// user.id=2;


// function accepting optionals
function greetUser(name?:string):void{
  console.log(`hello ${name ?? "guest"}`)
}

// Array 
let nums:number[]=[1,2,3,4,,5,6,7];
// now a questions is 
//i am given a variable id which can be number or a string
function PrintId(id:number|string){
  if (typeof id==="number"){
    console.log("ID is a number");
  }
  else {
    console.log("ID is string");
  }
}

//union in function  parameters

