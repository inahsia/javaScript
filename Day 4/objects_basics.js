const user={
  name:"aishani",
  age:21,
  isstudent:true
};


// Dot notation 

// we use it when property name is fixed and valid

console.log(user.name);
user.age=22;


// Bracket Notation 
const user={
  name:"aishani",
  age:21,
  isstudent:true
};

console.log(user["name"]);
let key="age"

console.log(user[key]);


// this is refers to the object that is calling the method
const user={
  name:"aishani",
  greet(){
    console.log("hello"+this.name);

  }
};
user.greet()

// significance of object constructor
// used to create multiple object with the same structure

function User(name,age){
  this.name=name;
  this.age=age;
}
const u1=new User("Aishani",21)
const u2=new User("Bob",30)



// object methods

const obj={a:1}
Object.freeze(obj);

Object.keys(obj)


// object.entries more helpful in looping 

Object.entries(user);
for (let [key,value] of Object.entries(user)){
  console.log(key,value);

}

// Object.assign
// copies properties from one object to another
const target={};
const source={a:1};
Object.assign(target,source);


// Object.create()
// create a new object using an existing object as its prototype.

Object.create(PromiseRejectionEvent,propertiesObject);
// protp->the object that should be the prototype of the new object 

const person={
  greet(){
    console.log("hello");
  }
};
const student=Object.create(person);
student.greet()



// get a proptotype
console.log(Object.getPrototypeOf(student)===person);
// true


// Checks if property belongs directly to object
Object.hasOwn(user,"name");

// object.is()
Object.is(NaN,NaN);
Object.is(0,0);

// hasOwnProperty()
// old method to check own property
user.hasOwnProperty("name");

// Working with JSON
// used to send data between server<->client

const jsonText=JSON.stringify(user);

// JSON.parse()
const obj=JSON.parse(jsonText);





// dot and bracket 
const obj ={
  name:"aishani",
  class:"this"
};

console.log(obj.name);
console.log(obj["name"]);


for (let [key,value] in Object.entries(obj)){

    console.log(key,value);

}


for (let i in Object.keys(obj)){
  console.log(i);
}





// merge
let obj1={
  name:"aishani",
  sem:"8th"
};

let obj2={
  marks:91,
  siblings:1
}


const obj3={};
obj3={...obj1,...obj2}


// array 
let arr=[1,2,3,4,5,6];
let arr1=[7,8,9,10];
let arr3=[];

arr.concat(arr3,arr,arr1);

arr3={...arr,...arr1};

