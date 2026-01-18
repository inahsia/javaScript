// Q1. Print numbers from 1 to 10
let n=10;
for (let i=0;i<=n;i++ ){
  console.log(i);
}

// Q2. Print even numbers between 1 and 20
let m=20;
for (let i=0;i<=m;i++)
{
  if (i%2===0){
    console.log(i);
  }
}


// Q3. Find sum of all numbers in an array
const nums=[10,20,30,40,50]
numbers =(nums)=>{
  let sums=0;
  for (let i=0;i<=nums.length;i++){
    sums+=nums[1]

  }
  console.log(sums)
}

numbers(nums);


// Reverse a string using for
let str="javascript".split("");
i=0
j=str.length;

while(i<=j){
  let temp=str[i];
  str[i]=str[j];
  str[j]=temp;
  i++;
  j--;

}
console.log(str.join(""));

// Print all elements of array
const fruits=["apple","banana","mango"];
for (let i of fruits){
  console.log(i);
}


// count vowels in a string 
let str="aishani singh".split("");
  let count=0;
for (let i of str){

  if (i==="a"||i ==="e" ||i==="i"||i==="o" || i==="u"){
    count++;
  }
 

}
 console.log(count);


//  Capitalize first letter of each word

let name="     aishani singh     ";
let word=name.trim().split(" ");

capital=(word)=>{
  return word.charAt(0).toUpperCase() + word.substring(1);
};
let result=word.map(capital).join(" ");
console.log(result);

// Print all keys of an object
const user={
  name:"Aishani Singh",
  age:21,
  city:"Delhi"
};
let count=0;
for (let i in user){
  count++;
  console.log(i);
}
console.log(count);


for (let i in [10,20,30]) console.log(i);
// this will give index 
// or 

for (let i of [10,20,30]) console.log(i);
// this will normally iterate
