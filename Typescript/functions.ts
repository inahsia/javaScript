export {}

function addTwo(num:number){
  return num+2;
}

function getUpper(val:string){
  return val.toUpperCase();
}

function signUpUser(name:string,email:string,isPaid:boolean){
}

// if we want to use arrow function;
let loginUser=(name:string,password:string,isPaid:boolean =false)=>{
  return `${name} is aishani singh with ${password}`;
}

addTwo(5);
getUpper("aishani_singh");
signUpUser("Aishani Singh","singhaishani2003@gmail.com",false)
loginUser("Aishani Singh","aishani");



// here we are having ambiguity like what return type should be there 
// if condition is satisfied -> boolean return type 
// else  which is not expicitly explained here , implies 200 ok
function getValue(myVal:number):string{
  if(myVal>5){
    return true;
  }
  return "200 OK"
}



const getHello=(s:string):string=>{
  return "what do u mean ";
}


// const main_heros=["thor","spiderman","ironman"];
 const main_heros=[1,2,3];
main_heros.map((num):string=>{
  return `hero is ${num}`
})


// another case
// const main_heros=["thor","spiderman","ironman"];
const main_heros=[1,2,3];
main_heros.map((num):string=>{
  return 1;
})



// ==========================================


// one of the case that you need to know is that when we have no return type we are just consoleing 
function consoleError(errmsg:string):void{
  console.log(errmsg);
}

// some functions never returns a value
// handling error
// this is an intentional crash
function handleError(errmsg:string):never{
  throw new Error(errmsg);
}



// the difference between voids and never

// void is basically for ->function finishes , but return nothing useful

// never → Function never finishes normally


// void — function returns nothing

// A function with return type void:

// Runs completely

// Does not return a value

// May end naturally

// Example
function logMessage(msg: string): void {
  console.log(msg);
}


// ✔ Function executes
// ✔ No return value
// ✔ Program continues

// You can technically write return;, but not return value.


// never — function never returns

// A function with return type never:

// Never reaches the end

// Never returns

// Program flow stops or jumps forever

// Example 1: Throwing an error
function crash(msg: string): never {
  throw new Error(msg);
}


// ✔ Function exits via exception
// ✔ No return possible