/******************************************************
 * JAVASCRIPT NOTES
 * Topics Covered:
 * 1. Data Types
 * 2. Hoisting
 * 3. Scope (Global, Function, Block)
 * 4. Closures
 ******************************************************/



/* =====================================================
   1️⃣ DATA TYPES IN JAVASCRIPT
===================================================== */

/*
JavaScript has 2 main categories of data types:

A) Primitive Types
B) Non-Primitive (Reference) Types
*/


/* ---------- A) PRIMITIVE TYPES ---------- */

/*
1. String      -> "Hello"
2. Number      -> 10, 3.14
3. BigInt      -> 12345678901234567890n
4. Boolean     -> true / false
5. Undefined   -> variable declared but not assigned
6. Null        -> intentional empty value
7. Symbol      -> unique identifier
*/

let str = "Hello";     // String
let num = 25;          // Number
let big = 123456789n;  // BigInt
let isTrue = true;     // Boolean
let x;                 // Undefined
let empty = null;      // Null
let sym = Symbol("id");// Symbol



/* ---------- B) NON-PRIMITIVE TYPES ---------- */

/*
1. Object
2. Array
3. Function

Stored by reference
*/

let person = {
    name: "John",
    age: 25
};

let numbers = [1, 2, 3];

function greet() {
    return "Hello";
}



/* =====================================================
   2️⃣ HOISTING
===================================================== */

/*
Hoisting = JavaScript moves declarations to the top
of their scope before execution.

IMPORTANT:
- Only declarations are hoisted
- Not initializations
*/


/* ---------- VAR HOISTING ---------- */

console.log(a); // undefined
var a = 10;

/*
Behind the scenes:

var a;
console.log(a);
a = 10;
*/


/* ---------- LET & CONST HOISTING ---------- */

// console.log(b); // ReferenceError
let b = 20;

/*
let and const are hoisted
BUT they stay in the "Temporal Dead Zone (TDZ)"
until the line where they are declared.
*/


/* ---------- FUNCTION HOISTING ---------- */

sayHello(); // Works

function sayHello() {
    console.log("Hello");
}

/*
Function declarations are fully hoisted.
*/


/* ---------- FUNCTION EXPRESSION ---------- */

// sayHi(); // Error

var sayHi = function () {
    console.log("Hi");
};

/*
Only the variable (sayHi) is hoisted as undefined.
The function body is NOT hoisted.
*/



/* =====================================================
   3️⃣ SCOPE IN JAVASCRIPT
===================================================== */

/*
Scope = Where a variable can be accessed.
*/


/* ---------- GLOBAL SCOPE ---------- */

let globalVar = "I am global";

function checkGlobal() {
    console.log(globalVar); // Accessible
}

checkGlobal();
console.log(globalVar); // Accessible everywhere



/* ---------- FUNCTION SCOPE ---------- */

function testFunctionScope() {
    var message = "Inside function";
    console.log(message); // Works
}

testFunctionScope();
// console.log(message); // Error

/*
Variables declared inside function
are not accessible outside.
*/


/* ---------- BLOCK SCOPE ---------- */

if (true) {
    let age = 25;
    const city = "NY";
    console.log(age); // Works
}

// console.log(age); // Error

/*
let and const are block-scoped.
*/


/* ---------- VAR IS NOT BLOCK SCOPED ---------- */

if (true) {
    var xValue = 100;
}

console.log(xValue); // Works



/* =====================================================
   4️⃣ CLOSURE (LEXICAL SCOPE)
===================================================== */

/*
Lexical Scope:
Inner functions can access outer function variables.
*/


function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3

/*
Closure = Inner function remembers outer variables
even after outer function has finished execution.
*/



/* =====================================================
   QUICK REVISION SUMMARY
===================================================== */

/*
DATA TYPES
- Primitive: String, Number, BigInt, Boolean, Null, Undefined, Symbol
- Non-Primitive: Object, Array, Function

HOISTING
- var → hoisted & initialized as undefined
- let/const → hoisted but in TDZ
- function declaration → fully hoisted
- function expression → not fully hoisted

SCOPE
- Global → accessible everywhere
- Function → inside function only
- Block → inside {}
- Closure → function remembers outer variables
*/

//now  i have also have DOM related opertions , that can be accessed from 
var a=prompt("name is what");
let f=console.log(alert(a));
console.log(f);


//now we got Object and we going to revise all related to objects 

// stores key and values 

const user={
  name:"aishani singh",
  age:25,
  isAdmin:false
};

//dot notation 
console.log(user.name);
//use dot when :=>
  //-property name is known 
  //-no space or special character

//bracket notation 
console.log(user["age"]);
//property name has space 
//property is dynamic

const keyName="isAdmin";
console.log(user[keyName]);

//now the concept of this 
//"this" refer to the object calling the method
const person={
  firstName:"Aishani",
  greet:function(){
    console.log("Hello "+this.firstName);
  }
};
person.firstName="raj";

console.log(this.firstName);
//in arrow function , "this does Not refer to Object"

//Object Constructor
//Object constructor allows creating multiple objects using blueprint
function Car(brand,model){
  this.brand=brand;
  this.model=model;
}
const car1=new Car("Toyota","Camry");
const car2=new Car("Honda","Civic");

//significance :
//reusability 
//create multiple instance

//important object methods
const obj={a:1,b:2};

//now we have concept of Object.freeze()
Object.freeze(obj);
/*
this prevents
-adding properties
-deleting properties
-modifying properties
*/

//Object.keys()
console.log(Object.keys(obj));

//Object.values()
console.log(Object.values(obj));

//Object.entries
console.log(Object.entries(obj));

//Object assign 
const obj2={c:3};
const merged=Object.assign({},obj,obj2);
console.log(merged);

//Object.create()
// it creates a new object 
const proto={
  greet(){
    console.log("hello");
  }
};
const newObj=Object.create(proto);
newObj.greet();



//Object.hasOwn()
console.log(Object.hasOwn(obj,"a"));

//Object.is()
// strict comparisan 
console.log(Object.is(5,5)); //true
console.log(Object.is(NaN,NaN));//true

//working with JSON
const jsonString='{"name":"john","age":30}'
JSON.parse();
const parsedObj=JSON.parse(jsonString);
console.log(parsedObj.name);

//JSON.stringify()
const backToString=JSON.stringify(parsedObj);
console.log(backToString);

//spread operators 
//used to copt or merge Objects 

const user1={name:"A"};
const user2={age:20};
const mergedUser={...user1,...user2};
console.log(mergedUser);

//spreads creates shallow copy 


/*create an object called "student" with :
  -name
  -marks
  -method getResult() that prints "pass" if marks>40

  */

  const student={
    name:"aishani",
    marks:60,
    getResult:function (){
      if(this.marks>40){
        console.log("pass");
      }
      else{
        console.log("fail");
      }
    }
  };

  student.getResult();

  //Q i want to freeze an Object and try modifying it.
  //Observe behavior.


  Object.freeze(obj);

  //structuredClone()
  const original = {
  name: "John",
  address: {
    city: "NY"
  }
};

const clone = structuredClone(original); //deep copy


  // constructor
  
  function Car1(name,price){
    this.name=name;
    this.price;
  }
  const a=new Car1("toyota",100);
  console.log(a.name)

  //practice 5 (Advanced)
  //const data={a:1,b:2,c:3};


  /*********************************************************
                JAVASCRIPT OBJECT MASTER NOTES
*********************************************************/

/* ======================================================
   1️⃣ WHAT IS A JAVASCRIPT OBJECT?
====================================================== */

/*
An object is a collection of key-value pairs.

Syntax:
{
   key: value
}

Keys are strings (or Symbols)
Values can be ANY data type.
*/

const user = {
    name: "John",
    age: 25,
    isAdmin: false
};


/* ======================================================
   2️⃣ ACCESSING OBJECT PROPERTIES
====================================================== */

/* ---------- DOT NOTATION ---------- */

console.log(user.name);  // John

/*
Use dot when:
- Property name is known
- No spaces or special characters
*/


/* ---------- BRACKET NOTATION ---------- */

console.log(user["age"]); // 25

/*
Use bracket when:
- Property name has spaces
- Property is dynamic
*/

const keyName = "isAdmin";
console.log(user[keyName]); // false


/* ======================================================
   3️⃣ USE OF "this" KEYWORD
====================================================== */

/*
"this" refers to the object calling the method.
*/

const person = {
    firstName: "Alice",
    greet: function() {
        console.log("Hello " + this.firstName);
    }
};

person.greet(); // Hello Alice

/*
IMPORTANT:
- In arrow functions, "this" does NOT refer to object.
*/


/* ======================================================
   4️⃣ OBJECT CONSTRUCTOR
====================================================== */

/*
Object constructor allows creating multiple objects
using a blueprint.
*/

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log(car1.brand); // Toyota

/*
Significance:
- Reusability
- Create multiple instances
*/


/* ======================================================
   5️⃣ IMPORTANT OBJECT METHODS
====================================================== */

const obj = {
    a: 1,
    b: 2
};


/* ---------- Object.freeze() ---------- */

Object.freeze(obj);

/*
Prevents:
- Adding properties
- Deleting properties
- Modifying properties
*/


/* ---------- Object.keys() ---------- */

console.log(Object.keys(obj)); 
// ["a", "b"]


/* ---------- Object.values() ---------- */

console.log(Object.values(obj));
// [1, 2]


/* ---------- Object.entries() ---------- */

console.log(Object.entries(obj));
// [["a",1], ["b",2]]


/* ---------- Object.assign() ---------- */

const obj2 = { c: 3 };
const merged = Object.assign({}, obj, obj2);

console.log(merged);


/* ---------- Object.create() ---------- */

const proto = {
    greet() {
        console.log("Hello");
    }
};

const newObj = Object.create(proto);
newObj.greet();


/* ---------- Object.hasOwn() ---------- */

console.log(Object.hasOwn(obj, "a")); // true


/* ---------- hasOwnProperty() ---------- */

console.log(obj.hasOwnProperty("b")); // true


/* ---------- Object.is() ---------- */

console.log(Object.is(5, 5)); // true
console.log(Object.is(NaN, NaN)); // true
// Unlike ===, it correctly compares NaN



/* ======================================================
   6️⃣ WORKING WITH JSON
====================================================== */

const jsonString = '{"name":"John","age":30}';

/* ---------- JSON.parse() ---------- */

const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name);


/* ---------- JSON.stringify() ---------- */

const backToString = JSON.stringify(parsedObj);
console.log(backToString);



/* ======================================================
   7️⃣ SPREAD OPERATOR (...)
====================================================== */

/*
Used to copy or merge objects
*/

const user1 = { name: "A" };
const user2 = { age: 20 };

const mergedUser = { ...user1, ...user2 };

console.log(mergedUser);


/*
Spread creates shallow copy.
*/


/*********************************************************
                🔥 VIGOROUS PRACTICE SECTION
*********************************************************/

/* ========== PRACTICE 1 ========== */
/*
Create an object called "student" with:
- name
- marks
- method getResult() that prints "Pass" if marks > 40
*/

const student = {
    name: "Sam",
    marks: 60,
    getResult() {
        if (this.marks > 40) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
};

student.getResult();



/* ========== PRACTICE 2 ========== */
/*
Freeze an object and try modifying it.
Observe behavior.
*/



/* ========== PRACTICE 3 ========== */
/*
Convert this object to JSON and back:

{
  product: "Phone",
  price: 1000
}
*/



/* ========== PRACTICE 4 ========== */
/*
Create constructor "User" with:
- username
- email

Create 3 users.
*/



/* ========== PRACTICE 5 (ADVANCED) ========== */
/*
Given:
const data = { a: 1, b: 2, c: 3 };

1. Print all keys
2. Print all values
3. Convert into array of entries
4. Clone it using spread
5. Check if property "d" exists
*/



/*********************************************************
                🎯 INTERVIEW IMPORTANT NOTES
*********************************************************/

/*
1. Objects are reference types.
2. Spread & Object.assign create shallow copies.
3. "this" depends on how function is called.
4. freeze() is shallow.
5. JSON cannot store functions or undefined.
6. Object.is() handles NaN correctly.
*/

//object destructuring
const user={
  name:"john",
  age:25,
  city:"NY"
};

// with destrucuring
const {name,age}=user;
console.log(name);
console.log(age);


//renaming while destructuring 
const {name:userName}=user;

console.log(userName);

//nested destructuring 
const person={
  name:"Alice",
  address:{
    city:"LA"
  }
};
const {address:{city}}=person
console.log(city);
//=======================================================================================
// REVISE I HAVE TO DO THROUGLY


//call(),apply(),bind()

//call()->
//invokes function immediately and set this 
//=======================================================================================

//concat()
//this will return a new array

const arr1=[1,2];
const arr2=[3,4];

const result=arr1.concat(arr2);
console.log(result);

//every()
const nums=[2,4,6];
const result=nums.every(n=>n%2===0);
console.log(result); //boolean 

//filter()
const nums=[1,2,3,4,5,6];
const result=nums.filter(n=>n>2);
console.log(result);
//array


//flat()
//flatten nested arrays 
//return a new array

const arr=[1,[2,3],[4]];
console.log(arr.flat());
//new array

//flatMap
//map+flat
//return new array
const arr=[1,2,3];
const result=arr.flatMap(x=>[x,x*2]);
console.log(result);


//forEach()
//loops
//return undefined
const arr=[1,2,3,4];
arr.forEach(u=>console.log(u));
//undefined


//indexOf()
//first index
//return number
[1,2,3,2].indexOf(2);
//return type ->number
//return index of element


//lastIndexOf()
[1,2,3,2].lastIndexOf(2);
//return Type->Number


//map()
//tranform 
//return new array

[1,2,3].map(x=>x*2);
//array


//reduce 
//reduces to single value
//any type 

[1,2,3,4].reduce((acc,curr)=>acc+curr,0);

