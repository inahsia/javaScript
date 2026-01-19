if (a>b){
  max=a;
}
else{
  max=b;
}
let x=5;
let y=x>3 ?"yes":"No"

console.log(y);

======================================================================
let message;
if (isLoggedIn){
  message="welcome";
}
else{
  message="please log in";
}

let isLoggedIn=true;

let m=isLoggedIn===true ? "welcome":"Please log in"


let score=85;
let grade=score>=90?"A":
score>=75 ?"B":
score>=60 ?"C":"F";
console.log(grade);



let n=10;
for (let i=0;i<=n;i++){
  console.log(i)
}



let i=2;
while (i<=20){
  console.log(i);
  i+=2
}



let i=0;
do{
  console.log(i);
  i++;
}
while(i<=5);



// for in 
let students

let student = {
  name: "Ankit",
  age: 20,
  city: "Delhi"
};
for (let key in student){
  console.log(key +":"+student[key]);
}


async function showData(){
  let data=Promise.resolve(["A","B","C"]);
  for await(let i of data){
    console.log(i);
  }
}


// switch case
let day=3;
switch (day){
  case 1:
    console.log("Monday");
  break;
  case 2:
    console.log("Tuesday");
  break;
  case 3:
    console.log("wednesday");
  break;
  default:
    console.log("invalid day");
}

let m=5;
for (let i=0;i<=10;i++)
{
  console.log(`${m} * ${i}= ${m*i}`);

}


// check whether a number is odd or even 
for (let i = 0; i <= 30; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// Reverse an array using a loop.
let arr=[1,2,3,4,5,6,7,8,8,9,0];
i=0;
j=arr.length-1;

while (i<j){
  let temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
i++;
j--;
}
console.log(arr);



// count vowels in a string 
let vowels="aishani";
let m=vowels.split("");
let count=0;
for (let i of m){

  if (i==="a" || i==="e"|| i==="i"|| i==="o"|| i==="u"){
    count++;
  }

}

 console.log(count);


//  concat()
let a=["a","b"];
let b=["c","d"];
let result=a.concat(b);
console.log(result);

// return type is new array

// every
let nums=[2,4,6,8];
let result=nums.every(n=>n%2===0);

// filter
// New Array

let nums=[5,10,8,20];
nums.filter(n=>n%2===0);

// flat()
// return new array
let arr=[1,[2,3],5,6];
console.log(arr.flat(2));

// flatmap
// returns a new array
let num=[1,2,3];
let result=num.flatMap(n=>[n,n*2])

// forEach 
// in this the result is undefined
let arr=[1,2,3];
arr.forEach(n=>console.log(n));

// indexof
// number is the return type
// first index of element 
let arr=["a","b","c"];
console.log(arr.indexOf("b"));

// lastIndex of 
let arr=[1,2,3,2];
console.log(arr.lastIndexOf(2));

// Map()
// New Array
let nums=[1,2,3];
console.log(nums.map(n=>n*2));


// reduce 
// reduce array to single value
let nums = [1, 2, 3, 4];
let sum=nums.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

// reverse()
// array(mutates)
let arr=[1,2,3];
arr.reverse();
console.log(arr);


// slice()
// Purpose: Extract portion
// Return type: 🟢 New Array
let arr=[1,2,3,4]
console.log(arr.slice(1,3));

// some()
// boolean
let nums=[1,2,5];
console.log(nums.some(n=>n%2===0));


// sort()
let nums=[10,2,30];
nums.sort((a,b)=>a-b);
console.log(nums);


nums={
  a:10,
  b:1,
  c:20,
  d:5,
  i:-1
}
sort=Object.entries(nums).sort((a,b)=>a[1]-b[1]);
console.log(sort)

// splice
let arr=[1,2,3,4];
arr.splice(1,2);
// entries
// return iterators

let arr = ["a", "b"];
for(let [val,key] of arr.entries()){
  console.log(val,key);
}


// fill
let arr=[1,2,3];
arr.fill(0);

// find()
// Element or undefined
let nums = [5, 12, 8];
console.log(nums.find(n=>n>10));

findLast()

// Purpose: Last matching element
// Return type: 🟢 Element or undefined
// includes()

let arr=["x","y"]
for (let keys of arr.keys())

  // to add element to thr begining 
  // we use unshift

  let fruits = ["apple", "banana"];
  result=fruits.unshift("mango");

  // shift()
  // remove from begining

  str.toLowerCase()
  toUpperCase()
  toLocaleLowerCase()
  toLocaleUpperCase()
  trim()
  trimStart()
trimEnd()
substring(start, end)
slice(start, end)

// Supports negative indexes.
// concat in string 

"Hello".concat(" ","world");

"hi".repeat(3);


"foo baz lol".replace("foo","azz");



// call
// with he specific this 
function greet(city){
  return `hello ${this.name} from ${city}`;
}
const user={name:"aishani"};

greet.call(user,"delhi");

apply is same as call but in array format
greet.apply(user,["mumbai"]);
 

// call also used as a function borrower
let name={firstname:"aishani",
  lastname:"singh"

}

// toString 
// function add(a, b) {
//   return a + b;
// }

// add.toString();

const a = { x: 1 };
const b = { y: 2 };
Object.assign(a,b);
JSON.stringify()
JSON.parse()

const user = { name: "Aman", age: 22 };

const updated = { ...user, age: 23 };
------------------------------------------------------------------------------
// for my practice 

function greetUser(name,callback){
  console.log(`hello ${name}`);
  callback();

}
function afterGreeting(){
  console.log("Greeting completed");

}

greetUser("aishani",afterGreeting);

------------------------------------------------------------------------------
function fetchData(callback){
  setTimeout(()=>{
    console.log("Data fetched");
    callback();
  })
}
function processData(){
  console.log("processing data");
}
fetchData(processData);

------------------------------------------------------------------------------
function fetchDataPromise(){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      success=true;
      if (success===true){
        resolve("lessgo");
      }
      else{
        reject("loser");
      }
    },4000);
  })
}

fetchDataPromise()
.then((num)=>{
  console.log("worked",num);
})
.catch((error)=>{
  console.log(error);
})

------------------------------------------------------------------------------
async function getData(){
  try {
    const a=await fetchDataPromise();
    console.log(a);

  }
  catch(error){
    console.log(error);
  }
}
getData();
------------------------------------------------------------------------------
function fetchUser(){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        m="will this going to work";
      resolve(m);
        
    },1000);
  })
}

function fetchPosts(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        m="will this going to work";
      resolve(m);
    },1000)
  });
}

async function thepost(){
  const a=await fetchUser();
  console.log(a);
  const b=await fetchPosts();
  console.log(b)
}
thepost();
------------------------------------------------------------------------------
// I used nested callbacks, which creates a deeply nested structure.

function fetchUser() {
return new Promise((resolve,reject)=>{
  setTimeout(() => {
   
    resolve("User Fetched");
  }, 1000);
})

}

function fetchPosts() {
return new Promise((resolve,reject)=>{
  setTimeout(() => {

    resolve("Posts fetched");
  }, 1000);
})
}

function fetchComments() {
return new Promise((resolve,reject)=>{
  setTimeout(() => {

    resolve("Comments fetched");
  }, 1000);
})
}


fetchUser(()=>{
  fetchPosts(()=>{
    fetchComments(()=>{
      console.log("All data fetched");
    })
  })
})

fetchUser().then((user)=>{
  console.log(user);
  return fetchPosts();

})
.then((post)=>{
  console.log(post);
  return fetchComments()

})

.then((comments)=>{
  console.log(comments);
})
.catch(error){
  console.log(error);
}

------------------------------------------------------------------------------
function add(a,b,callback){
  setTimeout(()=>{
    const m=a+b;
    callback(m);
  },1000);
}

function multiply(value,c,callback){
  setTimeout(()=>{
    const m=value*c;
    callback(m);
  },1000)
}

function subtract(value,d,callback){
  setTimeout(()=>{
    const m=value-d
    callback(m);
  },1000)
}

add(2,3,(sum)=>{
  multiply(sum,2,(multi)=>{
    subtract(multi,4,(sub)=>{
      subtract(sub, 2, (m) => {
          console.log(m);
        });
    })
  })
})

------------------------------------------------------------------------------
function add(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(a+b)
    })
  })
}

function multiply(result,c){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(result*c);
    },2000);
  });
}

function subtract(result,d){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(result-d);
    },3000);
  });
}

add(100,200).then((sum)=>{
  console.log(sum);
  return multiply(sum,2)
})
.then((multi)=>{
  console.log(multi);
  return subtract(multi,3);
})
.then((prod)=>{
 
  console.log(prod);
})


// async /await 
async function calculator(){
  try{
    const sum =await add(1,2);
    console.log(sum);
    const prod=await multiply(sum,3)
    console.log(prod);
    const final_result=await subtract(prod,3);
    console.log(final_result);

 
 catch(error){
  console.log(error);
 } }
}

------------------------------------------------------------------------------
function calculator(a,b,callback){
  setTimeout(()=>{
    callback(a,b);

  },2000)
}