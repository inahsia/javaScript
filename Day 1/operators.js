// Artimetic operators 
let a=5;
let b=2;

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a*b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

// unary operators
a++;
b--;

a=a+1;
b=b+1;
console.log(a);
console.log(b);

//pre and post increament and decrement
m=6
o=7

console.log(m);
console.log(o);

// assignment operators
a+=1       //a=a+1
console.log(a);
b-=1       //b=b-1
console.log(b);
b*=10      //b=b*10
console.log(b);
b%=5       //b=b%5
console.log(b);
b**=8      // b=b**8
console.log(b)


// camparison operators
// ==   equal to
// ===  equal to & type
// !==   not equal to & type 
// !=   not equal to
// >,>=,</<=


console.log("5==2",a==b);
console.log("5!=5",a!=b);
console.log("5>5",a>b);


// logical operators

// &&
// ||
//  !

let c=6;
let d=8;

let cond1=c>d; //true
let cond2=a===6; //true
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1 || cond2);

console.log(!(6<5));


let user=null;

const {name}=user ?? {}


or operator


while (i<n){
  if (i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){

  }
}



//////////////////////////////////////////////////////////////////////
obj=[1,2,3,4];
for (let i in obj){
  console.log(i)
}




// 
// names="aishani";
// names=names.split(" ")
// names.map((word)=>word.atChar(0).toUppercase()+word.slice(1)).join(" ");


// function capital(names){

// names=names.split(" ")
// names.map((word)=>word.atChar(0).toUppercase()+word.slice(1)).join(" ");



// }
// names="aishani";
// capital(names);






function capital(names){
names="aishani";
capital=names.split(" ")
capital.map((word)=>word.atChar(0).toUppercase()+word.slice(1).join(" "));
return capital;

}
names="aishani";
capital(names);


function capital(names) {
  return names.split(" ")
    .map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

let names = "aishani";
capital(names);






