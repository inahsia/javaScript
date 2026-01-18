const user={
  name:"Aishani",
  greet(){
    return "Hello "+this.name
  }

};
user.greet()


// used to create multiple similar object
function User(name,age){
  this.name=name,
  this.age=age;

}
const u1=new User("Aishani",21);
const u2=new User("Agam",30);

// OBJECT METHODS
// makes object immutable
const obj={a:1};
Object.freeze(obj);
obj.a=5;
// cant be done 


// Object.entries()
Object.entries(user);


// Object assign 
// copies propiertes from source to target 
const a = { x: 1 };
const b = { y: 2 };

const result=Object.assign({},a,b);

// Object.create()
// create object with specified prototype

const paraents={
  name:"aishani",
  greet(){
  return "Hello";
}};
const child=Object.create(paraents);
child.greet();

// object.hasOwn()
// check if property is own, not inherit 

Object.hasOwn(paraents,"name")

// Object.is()
// compares two values strictly

Object.is(0,0);

user.hasOwnProperty("age"); // true


// WORKING WITH JSON
// convert object to a string 
const obj={name:"Aishani",age:21};
const json=JSON.stringify(obj);
//'{"name":"aishani","age":21}';

// JSON.parse()
// Convert JSON string to Object 
const data=JSON.parse(Json)


// spread operator

// spread Operator(...)

user={
  name:"aishani",
  class:"grad_almost"
}
const userCopy={...user};
// Both objects point to the same memory reference


// Merge Objects
const extra={city:"delhi"};
const merge={...user,...extra};

// override value
const user={name:"Aishani",age:21};
const updated = { ...user, age: 22 };




let names="aishani singh"
const result=names.trim()
.split(" ")
.map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");




