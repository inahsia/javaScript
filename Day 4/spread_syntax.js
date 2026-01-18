const array=[1,2,3];
const Obj={...array};
// convert to array
// {0:1,1:2,2:3}

// Copy Object
const user={
  name:"Aishani Singh",
  age:21
} ;
const userCopy={...user};

// Merge Objects
const user={
  name:"Aishani",
  age:21,

};
const extra={
  country:"India",
  age:22
};
const merges={...user,...extra}

// when merging objects , properties from later objects overwrite earlier ones

// override value

const updated={...user,age:22};


/////////////////////////////////////////////////////////////////////

function greet(names){
  console.log(`hello ${names}, i like this couse`);

}
greet("aishani");


/////////////////////////////////////////////////////

// `` we use string literals 
function makeTea(typeOfTea){
  return `making ${typeOfTea}`;
}
let greet=makeTea("lemon Tea");
console.log(greet);

//////////////////////////////////////////////////////////////////////

function orderTea(teaType){
  function confirmOrder(){
    return `order conformed for chai`;

  }
 return confirmOrder();
}


////////////////////////////////////////////////////////////////////
// write an arrow function named 'calculateTotal'that takes 2 parameters 'price' and 'quantity'.the function should return the total cost by multiplying the 'price' and 'quanatity'.
// store the result in a variable named as 'totalCost'

const calculateTotal=(price,quantity)=>{
  return price*quantity;
}
let totalCost=calculateTotal(499,200)

