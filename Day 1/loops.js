// loops are used to execute a piece of code again and again 

// for loop
for (let i=0;i<=5;i++)
{
  console.log("my name is aishani singh")
}
console.log("loop has ended");


// sum of first n numbers
let sum=0;
for (let i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);
console.log("loop has ended");

// now we are going to discuss while loop

let i=1;
while (i<=5){
  console.log("i=",i);
  i++;

}


// do while loop 

let m=20;
do {
  console.log("this is what i have done till now");
  console.log(m);
  m++;

}while (m<=10);


// for -of loop
let strVar="what"
for (let val of strVar){
  // iterator->character
  console.log(val);

}

// for -in loop 
let student={
  name:'aishani',
  age:'21',
  cgpa:'8',
  ispass:true
};

for (let i in student){
  console.log(i);
}
for (let i in student){
  console.log(student[i]);
}


let gameNum=25;
let userNum=prompt("guess the game number:");
while (userNum!=gameNum)
{
  userNum=prompt("guess the game number:");
}
console.log('you won');

// string 
let str="what is this ";

// inbuild functions 
// functions-> methods
str="apna college kesa ho";
str.length
str[3];

// object.key
//str.length

// Template literalls
//  a way to have embedded expressions in strings
// string interpolation 
let a=`this is Template literalls `;

let obj={
  item:"pen",
  price:20,

};

let output=`the cost of ${obj.item} is ${obj.price} rupees.`

console.log(output);


// also 
console.log("apna \n life");

// for of loop
// it also interated for words 
let fruits=["apple","banana","orange"]
for (let v of fruits){
  console.log(v);
}