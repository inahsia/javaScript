// number
let userId:number=123456;

//boolean 
let isLoggedIn:boolean=false;

// any 
// it is basically used when u dont want a particular value to cause typechecking errors


let hero:string;

function getHero(){
  return "herooo";
}
hero=getHero();

// =================================================================
let hero:string;

function getHero(){
  return true;
}
hero=getHero();
// what going to cause error in this 
// as we have declared that her must be a string but assigning it as a boolean value cant be done
// this is basic stuff but still needs to have clarity