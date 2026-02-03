// let price=500;
// price="500";//
// solution 
let price = 500;
price = 1000;
// ================================================
let loggedIn = false;
loggedIn = 1;
//=================================================
let value;
// ================================================
// Write a function that:Takes a string
// Returns the length of the string
function getLength(a) {
    return a.length;
}
getLength("aishani");
// ===================================================
// function add(num1, num2) {
//   return num1 + num2;
// }
function add(num1, num2) {
    return num1 + num2;
}
// void vs never
// if we talk about void =>this function finishes normally and does not return a value
// never=> is like literally for undefined , if function never finshes
function throwsError(msg) {
    throw new Error(msg);
}
// we should use 
function throwError(msg) {
    throw new Error(msg);
}
// ===================================================
// if we got a function getUsername
function getUsername(user) {
    return user.name;
}
// implies
function getUsername(user) {
    return user.name;
}
// ===================================================
// function getEmail(user){
//   return user.email;
// }
function getEmail(user) {
    return user.email;
}
// ==================================================
// Objects with multiple properties
// function getUserInfo(user){
//   return user.name+""+user.age
// }
function getUserInfo(user) {
    return user.name + "" + user.age;
}
// ==================================================
// now we have optional property
// function getPhone(user:{name:string}){
//   return user.phone;
// }
function getPhone(user) {
    return user.phone;
}
function printUser(user) {
    console.log(user.name);
}
// array 
// Create:
// Array of numbers
// Array of strings
let score = [1, 2, 3, 4, 5];
let name = ["aishani", "riya", "kirat"];
let users = [
    { name: "Aishani", email: "singhaishani" },
    { name: "John", email: "j@j.com" }
];
// ===================================================
// if u got no return type then u can use
// void
// function printId(id:number){
//   console.log(id);
// }
function printId(id) {
    console.log(id);
}
// union with functions 
// return type union
function getResult(flag) {
    if (flag) {
        return "Success";
    }
    return 404;
}
// solution 
function getResult(flag) {
    if (flag) {
        return "success";
    }
    return 404;
}
// union Types + function
function printId(id) {
    if (typeof (id) === "string") {
        return id.toUpperCase();
    }
}
// ================================================
//tuple
// Create a tuple:
// username → string
// age → number
// isAdmin → boolean
let userInfo;
userInfo = ["aishani", 21, true];
// ================================================
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toString();
}
// ================================================
// literal union types
// let status:string;
// status="done";
// let status:"pending"|"done"|"failed"
// status="done"
// ================================================
//enum is used to define a set of named constand values
var status;
(function (status) {
    status[status["pending"] = 0] = "pending";
    status[status["done"] = 1] = "done";
    status[status["failed"] = 2] = "failed";
})(status || (status = {}));
function setStatus(attribute) {
    if (attribute === status.pending) { }
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
export {};
//# sourceMappingURL=practice_module.js.map