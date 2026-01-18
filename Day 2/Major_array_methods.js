const numbers =[1,2,3,4,5];
const mixed = [1, 2, [3, 4], [5, [6]]];
const users=[
  {id:1,name:"Aishani Singh",age:21},
  {id:2,name:"bob",age:30},
  {id:3,name:"charlies",age:18}

];


// concat()
const a = [1, 2];
const b = [3, 4];

const results=a.concat(b);
console.log(results);

// every ()
const numbers =[1,2,3,4,5];
const allpositive=numbers.every(n=>n>0);
console.log(allpositive); //true



// filter()
const adult=users.filter(users=>users.age>=21);
console.log(adult);

// flat()
// Flattens nested arrays into a single array

// Does not transform elements
console.log(mixed.flat());  //[1,2,3,4,5,[6]]
console.log(mixed.flat(2)); //in this 2 is depth removes nesting 
// [1,2,3,4,5,6] 


// flatmap is for what 
// array.flatMap(callback)
// cant control depth

const arr=[1,2,3];
arr.flatMap(x=>[x*2]);


const words=["hello", "", "world"];

words.flatMap(word=>word?[word]:[]);



// foreach()
numbers.forEach((num,index)=>{
  console.log(num,index)
})

// indexof()

console.log(numbers.indexOf(3));

// lastindexOf
const nums=[1,2,3,4,5,6,1];
console.log(nums.lastIndexOf(1));

// map
nums.map(x=>[x,x*x].flat(1))

// another example of map()
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]

//  reduce()
// reduce() is used to combine all values of an array into a single value (number, string, object, or even another array).

const numms=[1,2,3,4];
const sum =numms.reduce((total,num)=>{
  return total+num;
},0);
console.log(sum)


// reverse()
let reversed=[...numbers].reverse();
console.log(reversed);


// slice()
const sliced=numbers.sliced(1,4)
// [2,3,4]

// some()
const teens=users.some(users=>users.age<20);
console.log(teens);

// sort()

const fruits=["banana","apple","cherry"];
fruits.sort();

console.log(fruits)


// splice()
// array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex → where to start changing the array

// deleteCount → how many elements to remove

// items → (optional) elements to add

const numss = [1, 2, 3, 4, 5];

const removed = numss.splice(2, 2);

console.log(nums);    // [1, 2, 5]
console.log(removed); // [3, 4]


// entries
// entries() returns an iterator that gives you index–value pairs from an array.

for (const [index,value] of numbers.entries()){
  console.log(index,value);
}

// fill
const filled=new Array(5).fill(1);
console.log(filled);

// find
const foundUser = users.find(user => user.age > 25);
console.log(foundUser);


// findIndex()
const index=users.findIndex(user=>user.name==="bob");
console.log(index);
// 1

// findlast
const lasteven=numbers.findLast(n=>n%2==0);
console.log( lasteven);

// FindLastindex
const lastIndex = numbers.findLastIndex(n => n % 2 === 0);
console.log(lastIndex); // 3

// includes()
console.log(numbers.includes(3));


// join()
console.log(numbers.join("-"));
// 1-2-3-4

// keys()
for (const key of numbers.keys()){
  console.log(key);
}


for (const key of numbers.keys()) {
  console.log(key);
}


// // Which method removes duplicate items from an array?
// Question 4Answer

// a.
// reduce()

// b.
// unique()

// c.
// distinct()

// d.
// filter()
