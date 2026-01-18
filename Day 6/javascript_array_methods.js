// concat
const a=[1,2];
const b=[3,4];

console.log(a.concat(b))

// Q2
const arr1 = ["A", "B"];
const arr2 = ["C"];
const arr3 = ["D", "E"];
console.log(arr1.concat(arr2,arr3));

// every 
// every(callback) or every(callback,thisArg)

const nums=[2,4,6,8];
nums.every((n)=>n%2===0)

// Check if all users are adults (>=18)
const ages=[18,21,25,17];
ages.every((n)=>n>=18);

// filter()
const nums=[10,20,30,40,50];
result=nums.filter((n)=>n>20)


 // filter(callbackFn)
// filter(callbackFn, thisArg)

const user=[
  { name: "Aishani", age: 21 },
  { name: "Bob", age: 16 },
  { name: "Alex", age: 19 }
];
ages=user.filter(user=>user.age>=18);
console.log(ages)


// flat
// const arr = [1, 2, [3, 4], [5, [6]]];
// Flatten the array completely
arr.flat(2)

// flatMap(callbackFn, thisArg)
const arr=[1,2,1];

fl=arr.flatMap((num)=>(num===2?[2,2]:1));

// forEach()
const nums=[10,20,30];
nums.forEach((element)=>console.log(element));

// indexof()
// indexOf(searchElement, fromIndex)

const colors = ["red", "green", "blue", "green"];
colors.indexOf("green");

// lastIndexOf()
colors.lastIndexOf("green");

// map()
const nums=[1,2,3,4,5];
nums.map(num=>num**2);

const names = ["aishani", "bob"];
// Capitalize each name

const names=["aishani","bob"];
const result=names.map(name=>name.charAt(0).toUpperCase()+name.slice(1));
console.log(result);
// ['Aishani', 'Bob']


// reduce()
// reduce(callbackFn, initialValue)
const nums = [1, 2, 3, 4];
nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0);

// count frequency of each number
const nums=[1,2,3,3,3]
const freq={};
for (let i of nums){
  if (freq[i]){
    freq[i]++;
  }
  else{
    freq[n]=1;


  }
}
console.log(freq);

// reverse
const nums=[1,2,3,4];
nums.reverse();


// slice
const nums=[10,20,30,40,50];
nums.slice(2);


// some()
const nums=[1,2,3,5,8];
nums.some(n=>n%2===0)


// sort()
const nums=[40,100,1,5];
nums.sort((a,b)=>a-b);


const users = [
  { name: "Bob", age: 30 },
  { name: "Aishani", age: 21 }
];

users.sort((a,b)=>a.age-b.age);


// splice()

const nums=[1,2,3,4];
// remove 2 elements starting from index 1
console.log(nums.splice(1,2,1));

// entries()
console.log(fruits.entries());

// fill
const arr=new Array(5);

// find
const nums=[10,20,30,40];
console.log(nums.find(num=>num>25));

// findIndex()
console.log(nums.findIndex(num=>num>25)); 

// findLast()
const nums=[5,12,8,130,44];
//find last number greater than 10
nums.findLast(num=>num>10);

// findLastIndex()
nums.findLastIndex(num=>num>10);
// includes();
fruits.includes("banana");

// join
const words=["i","love","Js"];
words.join(" ");



const nums=[1,2,3,4,5,6];
nums.filter(n=>n%2===0).reduce((total,value)=>total=total+value,0);

// const words = ["apple", "banana", "kiwi"];
// // Return array of word lengths
const words = ["apple", "banana", "kiwi"];
words.length

words.join(" ").length

const nums = [1, 2, 3, 4, 5];
// Remove all odd numbers

nums.filter(n=>n%2===0)

// toLowerCase()
"HELLO".toLowerCase();
"hello".toUpperCase(); 
// "HELLO"

"İ".toLocaleLowerCase("tr"); 
"i".toLocaleUpperCase("tr");

// tostringe()
// convert value to string
let str=1;
str.toString();

// valueOf()
// in value you got no callback
let num=new Number(10);
console.log(num);
console.log(num.valueOf());

let a="           this is what i call people annoying"
a.trim();

"  hello".trimStart();
// "hello"

"hello  ".trimEnd();
// "hello"

"javascript".substring(0,4);
"java".slice(-6);

"a,b,c".split(",");
// ["a","b","c"]



"javascript".startsWith("java");

"javascript".endsWith("script");
// true


"ha".repeat(10);

// replace()
// replaces first occurance
"hello world".replace("hello","x");

"hello hello".replaceAll("hello","x");


// search()
"hello123".search(/\d/);

// include
"javascript".includes("script");

"hello".indexOf("l");

"hello".charAt(1);

"A".charCodeAt(0);
// returns unicode


"😀".codePointAt(0);
// 128512

"Hello".concat(" ", "World");
// "Hello World"


// Calls function with this + arguments
function greet(city){
  console.log(this.name+" from "+city);

}
const user={name:"aishani"}
// call() → arguments individually

greet.call(user,"delhi");

greet.apply(user, ["Delhi"]); 
// in array 


// bind()
// bind() returns a function
// Returns new function with bound this


