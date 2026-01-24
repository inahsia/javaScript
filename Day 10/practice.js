

// event loops 
// optional chainning 
// shallow copy to deep copy concepts 
// scopes
// block and function scope ,local scope
// null and undefined 
// arrow and normal funcyion 
// function declartion and function expression 
// callback functtion 
// closures and hoisting 
// return, and return await why we useand when 
// object destructuring 
// splice and slice difference 
// map and foreach having promises
// for of and for in  working of promises 
// lexical scope 
// settimeout and set
// throw error and throw new error 
// rest operator and nullish operator




// greeetUser
function greetUser(name,callback){
  console.log(`hello ${name}`);
  callback();
}

function afterGreeting(){
  console.log("Greeting completed");
}


greetUser("aishani",afterGreeting);


// ======================================================================


function fetchData(callback){
  setTimeout(()=>{
    console.log("Data Fetched");
    callback();
  },2000)
}

function processData(){
  console.log("Processing data");
}

fetchData(processData);

// =====================================================================
function fetchDataPromise(){
  return new Promise((resolve,reject)=>{

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


async function getData(){
  try{
    const a=await fetchDataPromise();
    console.log(a)
  }
  catch(error){
    console.log(error);
  }
}
 getData()
// ======================================================================
function fetchUser(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("User Fetched");
    },1000)
  });
}

function fetchPosts(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Posts fetched");
    },1000)
  });
}

async function thepost(){
  const a= await fetchUser();
  console.log(a);
  const b= await fetchPosts();
  console.log(b);
}

======================================================================
function user(callback){
  setTimeout(()=>{
   callback();
  },2000);
}

user(()=>{
  console.log("user fetched ");
  setTimeout(()=>{
    console.log("Posts fetched");
    setTimeout(()=>{
      console.log("Comments fetched");
    },2000);
  },2000);
})
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

// Callback Hell
fetchUser(() => {
  fetchPosts(() => {
    fetchComments(() => {
      console.log("All data fetched");
    });
  });
});

// promises concepts

// We are not passing user or posts here.
// These parameters receive the resolved value from the previous Promise.
fetchUser().then((user)=>{
  console.log(user);
  return fetchPosts();
})
.then((post)=>{
  console.log(post);
  return fetchComments();
})
.then((Comment)=>{
    console.log(Comment);
})
======================================================================

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

add(10, 5, (sum) => {
  multiply(sum, 2, (multi) => {
    subtract(multi, 4, (sub) => {
      subtract(sub, 2, (m) => {
        console.log(m);
      });
    });
  });
});


// now we will do the promise concept 
function add(a,b){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(a+b);
    },1000);
  });
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


add(100,200)
.then((sum)=>{
  console.log(sum);
  return  multiply(sum,2);

})
.then((multi)=>{
  console.log(multi);
  return subtract(multi,3);
})
.then((prod)=>{
 
  console.log(prod);
})



// now the async/ await
function add(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });
}

function multiply(value, c) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value * c), 1000);
  });
}

function subtract(value, d) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value - d), 1000);
  });
}


async function calculator(){
  try{
    
    const sum =await add(1,2);
    console.log(sum);
    const prod=await multiply(sum,3);
    console.log(prod);
    const finalresult=await subtract(prod,2);
    console.log(finalresult);
  }
  catch(error){
    console.log(error);
  }

}

====================================================================
function calculator(a,b,callback){
  setTimeout(()=>{
    callback(a,b);

  },2000)
}

calculator(5,6,(a,b)=>{
  let sum=a+b;
  console.log(sum);
  calculator(7,8,(a,b)=>{
    let sub=a-b;
    console.log(sub);
    calculator(9,10,(a,b)=>{
      let multi=a*b;
      console.log(multi);

    })
  })
})




function calculator(a,b){
  return new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(a,b);
  },2000)
  })
}

calculator(5, 6, (a, b) => {
  const sum = a + b;
  console.log(sum);

  calculator(sum, null, (val) => {
    const doubled = val * 2;
    console.log(doubled);

    calculator(doubled, null, (v) => {
      const tripled = v * 3;
      console.log(tripled);
    });
  });
});

//////////////////////////////////////////////////////////////////////

function calculator(a,b){
  return new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(a,b);
  },2000)
  })
}

async function cal(){
  try{
    const {a,b}=await calculator(5,6);
    let sum=a+b;
    console.log(sum);
    const {a:a1,b:b1}=await calculator(5,6);
    let prod=a1*b1
    console.log(prod);
  }
  catch(error){
    console.log(error)
  }
}


async function cal(){
  try{
    const sum=await calculator(5,(x)=>x+6);
    console.log(sum);
        const doubled = await calculator(sum, (x) => x * 2);
    console.log(doubled); // 22

    const tripled = await calculator(doubled, (x) => x * 3);
    console.log(tripled); // 66
  }
}




//////////////////////////////////////////////////////////////////////
// .then and .catch chaining 
calculator(5, 6)
  .then((sum) => {
    console.log(sum);
    return sum * 2;
  })
  .then((sum) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(sum);
        resolve(sum * 3);
      }, 1000);
    });
  })
  .then((tripled) => {
    setTimeout(() => {
      console.log(tripled);
    }, 1000);
  });

// ======================================================================
// type 1
function add(a,b,callback){
  setTimeout(()=>{
    let m=a+b;
    callback(a+b);
  },1000)
}

function multiply(value,c,callback){
  setTimeout(()=>{
    let n=value*c;
    callback(n);
  },1000)
}
function divide(value,d,callback){
  setTimeout(()=>{
    let k=value/d;
    callback(k);
  },1000)
}

add(5,6,(num)=>{
  console.log(num);
  multiply(num,6,(multi)=>{
    console.log(multi);
    divide(multi,7,(div)=>{
      console.log(div);
    })
  })
})

// now i am doing questions of promise
function add(a,b){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      let m=a+b;
      resolve(m);
    },1000)
  })
}

function multiply(value,c){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      let n=value*c;
      resolve(n);
  },1000)
  })
}
function divide(value,d){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      let k=value/d;
      resolve(k);
    },1000)
  })
}

add(1,2)
.then((num)=>{
  console.log(num);
  return multiply(num,4);
})
.then((multi)=>{
  console.log(multi);
  return divide(multi,4);
})
.then((div)=>{
  console.log(div);

})

// now doing async/await
async function calculate(){
  const num=await add(1,2);
  console.log(num);
  const sub=await multiply(num,3);
  console.log(sub);
  const multi=await divide(sub,5);
  console.log(multi);
}


// tyepe 2
function userLogin(callback){
  setTimeout(()=>{
    callback();
  },2000)

}
userLogin(()=>{
  console.log("User logged in");
  userLogin(()=>{
    console.log("Dashboard loaded");
    userLogin(()=>{
      console.log("User logged out");

    })
  })
})



function userLogin(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve();
  },2000)
  });
}

userLogin()
.then(()=>{
  console.log("User logged in");
  return userLogin();

})
.then(()=>{
    console.log("Dashboard loaded");
    return userLogin();
})
.then(()=>{
    console.log("User logged out");
})


// async/await
async function userProfileCriteria(){
  try{
    const a=await userLogin();
    console.log("User logged in");
        const b=await userLogin();
    console.log("Dashboard loaded");
        const c=await userLogin();
    console.log("User logged out");

  }
  catch(error){
    console.error(error);
  }
}


// optional chaining
// it allow us to safely access properties or methoods of an object that may be null or undefined without causing any error

const user={};
console.log(user.profile.name);

const={};
console.log(user.profile?.name);

const response = {
  data: {
    user: {
      name: "Aishani"
    }
  }
};

console.log(response.data.user.name);


// shallow copy and deep copy
// shallow copy->creates a new object , but the nested objects still shares the same memory references as the original
// Deep copy
// a deep copy creates a completely new object ,including nested objects,with no shared references

const user={
  name:"Aishani",
  address:{
    city:"delhi",
  }
}

// Only the top-level object is copied
// address still points to the same memory reference
const copy1=Object.assign({},user);
const copy2={...user};

copy1.address.city = "Mumbai";

console.log(user.address.city);

console.log(copy1.address.city);
// address still points to memory



const deepcopy=JSON.parse(JSON.stringify(user));
deepcopy.address.city="bangalore";
console.log(user.address.city);

Shallow Copy:
user ----> address <---- copy

Deep Copy:
user ----> address
copy ----> new address


//global scope ->when a variable is declared outside any function or block are in global scope and can be access anywhere
let x=10;
function test(){
  console.log(x);

}
test();
console.log(x);

// functional scope->Variables declared inside a function are accessible only inside that function.

function demo(){
  a=5;
  console.log(a);
}
demo();
console.log(a);

// blockk function 
// variable declared with let or const inside {} are accessible only within that block 

if (true){
  var z=15; //does not have block scope
  let x=10;
  const y=20;
}
console.log(x);

console.log(z);
console.log(y);

// | Scope    | Keyword         | Accessible Where     |
// | -------- | --------------- | -------------------- |
// | Global   | `var/let/const` | Everywhere           |
// | Function | `var`           | Inside function      |
// | Block    | `let/const`     | Inside `{}`          |
// | Local    | Any             | Inside current scope |

// closure scope
// when a function remmebers a scope in which they were created
// also called lexical scope

function outer(){
let count=0;

function inner(){

count++;
console.log(count);

}
return inner;

}
const counter=outer();


// another example
function parent(){
  let secret="JS";
  return function Children(){
    console.log(secret);

  };

}
const fn=parent();
finally();

// 📌 Even though parent() is done,
// 📌 child() still accesses secret.

// Call by value means a copy of the value is passed to the function, so changes inside the function do not affect the original variable.

// Call by reference means passing the memory reference, so changes affect the original object.
the call by reference is conceptual concept
js follows reference by value.


function change(obj) {
  obj = { name: "New User" };
  console.log(obj.name)
}

let user = { name: "Old User" };
change(user);

console.log(user.name); // Old User

----------------------------------------------------------------------
🔹 SECTION 2: Promises

Q4. What is a Promise? Name its states.

Q5. What is the difference between resolve and return?

Q6. What happens if you forget to return a Promise inside .then()?

Q7. Will this code work correctly? Why or why not?

fetchData()
  .then(() => {
    fetchMoreData();
  })
  .then(() => {
    console.log("Done");
  });

  🔹 SECTION 3: async / await

Q8. Why do we use async in a function?

Q9. Does await block the entire JavaScript program?

Q10. Why do we use try...catch with async/await?

🔹 SECTION 4: Calculations & Value Passing

Q11. How are values passed from one async step to another:

in callbacks?

in Promises?

in async/await?

Q12. Which one is easiest to debug and why?

🔹 SECTION 5: Scope & Closures

Q13. What is block scope? Which keywords support it?

Q14. What is a closure?

Q15. Why does a closure not lose its variables after the outer function finishes?

🔹 SECTION 6: Call by Value / Reference

Q16. Is JavaScript call by value or call by reference?

Q17. Why do object properties change inside a function but reassignment does not?

🔹 SECTION 7: Modern JavaScript

Q18. What is optional chaining? When should we use it?

Q19. Does optional chaining handle false or 0 values?

🔹 SECTION 8: Shallow vs Deep Copy

Q20. What is the difference between shallow copy and deep copy?

Q21. Is spread operator a deep copy? Why or why not?

// /this is only used in normal function but not in arrow function 
// but if we declare arrow on normal function then it will still going to work 


const user={
  name:"aishani",
  greet:function(){
    const inner=()=>{
      console.log(this.name);
    };
    inner();
  }
};
user.greet();



// this also work as constructor ->refers to newly created object
// this refers to the object that calls the function.

// hoisting is when the vairiable and function declaration to the top of their scope during compilation phase


// hositing in var
console.log(a);
var a=10;
//var is hoisted and initialized with undefined

console.log(b);
let b = 20;

// Cannot access 'b' before initialization
// Temporal Dead Zone (TDZ)



sayHello();

function sayHello() {
  console.log("Hello");
}
// Function declarations are fully hoisted.

// when u consider function expression
sayHi()
const sayHi=function(){
  console.log("hi");
};
// Cannot access 'sayHi' before initialization

greet();

const greet = () => {
  console.log("Hello");
};
// Arrow functions are not hoisted like function declarations.

Code Type	Hoisted?	Result
var	Yes	undefined
let / const	Yes	Error
Function declaration	Yes	Works
Function expression	No	Error


Hoisting is JavaScript’s behavior where variable and function declarations are processed before code execution, which is why some variables and functions can be used before they are declared.



Both return and return await return a Promise in an async function.
We use return await mainly for error handling, when we want to catch rejected Promises inside the function.


// hoisting
function declartion and function expression 
hoisting

// Object Destructuring 
const user={
  name:"aishani",
  age:22
}
const name=user.name;
const age=user.age;

const {name,age}=user;
// we can even rename them 
const {name:userName,age:userAge}=user;

// why do we use destructuring?
// It improves readability and reduces repetitive code.

// nullish coalescing
// nullish coalescing operator (??) provides default value only when the left handed side is null or undefined

// why do we use || and ??
// || uses default for any falsy value, while ?? uses default only for null or undefined.
const name = "";

console.log(name || "Guest"); // "Guest" ❌
console.log(name ?? "Guest"); // "" ✅
const isLoggedIn = false;

console.log(isLoggedIn || true); // true ❌
console.log(isLoggedIn ?? true); // false ✅


let user; //if undefined

const {name,class}=user ?? {}
const {name,age}=user ?? {}

// We use ?? {} in destructuring to prevent errors when the object might be null or undefined.
// In object destructuring, ?? {} is used to provide a fallback empty object so that destructuring does not fail when the object is null or undefined.

// hoisting
function declartion and function expression 
hoisting

// Object Destructuring 
const user={
  name:"aishani",
  age:22
}
const name=user.name;
const age=user.age;

const {name,age}=user;
// we can even rename them 
const {name:userName,age:userAge}=user;


// for each does not work with promises
const arr=[1,2,3];
arr.forEach(async (num)=>{
  await new Promise (res=>setTimeout(res,1000));
  console.log(num);
});
console.log("Done");


const arr=[1,2,3];
const promise=arr.map(async(num)=>{
 await new Promise(res=>setTimeout(res,1000));
  return num;
});
await Promise.all(promise)
console.log("Done")


// lexical scope
// Inner functions can access variables of their outer lexical scope.

const user = { name: "Aishani", age: 22, city: "Delhi" };

const { name, ...rest } = user;

console.log(rest);
// { age: 22, city: "Delhi" }

// Error Handling
// try...catch...finally
try {
  let result = a + 10;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Always runs");
}

function divide(a,b){
  if (b===0){
    throw new Error("cannot divide");
  }
  return a/b;
}

// throw new Error() is preferred because it provides proper error information and stack trace.


// throw error works 
// if error already exists
// rethrow an existing error


// Rest Operator
// the rest operators collects multiple values into a single array or object 
// Rest operator is used to group remaining elements.

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
const user = { name: "Aishani", age: 22, city: "Delhi" };

const { name, ...rest } = user;

console.log(rest);
// { age: 22, city: "Delhi" }

// Syntax errors occur due to incorrect code syntax, runtime errors occur during execution, and logical errors occur when the code runs but gives incorrect results.

Sure 👍
Here is a clean, structured, viva-ready NOTE on the Event Loop that you can revise before exam.

📘 EVENT LOOP — SHORT NOTES (VIVA READY)
🔹 What is the Event Loop?

Definition (MEMORIZE):

The event loop is a mechanism in JavaScript that manages asynchronous operations and decides when they are executed.

🔹 Why Event Loop is Needed

JavaScript is single-threaded

It can execute one task at a time

Event loop helps handle:

setTimeout

Promises

API calls

Events
without blocking the program

🔹 Main Components of Event Loop
1️⃣ Call Stack

Executes synchronous code

Follows LIFO (Last In, First Out)

2️⃣ Web APIs (Browser / Node)

Handles async tasks like:

setTimeout

DOM events  

Fetch / APIs

3️⃣ Queues
🔸 Microtask Queue (HIGH PRIORITY)

Promise .then(), .catch(), .finally()

queueMicrotask

🔸 Macrotask Queue (LOW PRIORITY)

setTimeout

setInterval

DOM events

🔥 Priority Rule (VERY IMPORTANT)

Microtask queue is executed before the macrotask queue.

🔹 How Event Loop Works (Steps)

Execute all synchronous code (Call Stack)

Execute all microtasks

Execute one macrotask

Repeat the process

🔹 Example (MOST IMPORTANT)
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

Output:
Start
End
Promise
Timeout

Explanation:

console.log → Call Stack

Promise.then() → Microtask Queue

setTimeout → Macrotask Queue

🔹 Microtask vs Macrotask
Feature	Microtask	Macrotask
Priority	High	Low
Example	Promise	setTimeout
Executes first	✅ Yes	❌ No
🔹 Common Viva Questions & Answers

Q. Does setTimeout(fn, 0) run immediately?
➡️ No, it goes to macrotask queue.

Q. Which runs first: Promise or setTimeout?
➡️ Promise (microtask).

Q. Does event loop make JS multi-threaded?
➡️ No, JS remains single-threaded.

🔹 One-Line Viva Answers

Event loop:

Event loop manages asynchronous code execution in JavaScript.

Microtask priority:

Microtasks are executed before macrotasks.

🧠 Final One-Line Summary (MEMORIZE)

The event loop allows JavaScript to perform non-blocking asynchronous operations using the call stack and task queues.


// const name="my name is aishani singh   ";
// trimedName=name.trim().split(" ");
// // trimedName.map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");

// error handling stuff
 https://chatgpt.com/share/696e32a6-ae10-800a-8b20-8b2a6b09bf7f
// -> too see this stuff
// ->to Practice this stuff
