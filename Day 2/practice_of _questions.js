// Use array methods to remove "Orange" and "Apple" from fruits.

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];

fruits.splice(1,2);
console.log(fruits)


// You must only use Array methods for this task!
// Task 1 → Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// Task 2 → Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once,
//  assuming that the we have to pay a base service price of 300 along with the item prices

function shoppingSpree(arr) {
   // your code here    
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

function shoppingSpree(arr) {
  const baseserviceprice = 300;
  const sumsss=arr.reduce((total,nums)=>
    total+nums.price,0);
  return sumsss + baseserviceprice;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist));

// → Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr){

  const inTheClub=arr.filter(arr=>arr.member===true);
  console.log(inTheClub);
  for (let v of inTheClub){
    console.log(v.name)
  }

}

console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

 // let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

// Task 1 → Write a program to check if the above array contains 14. Returned value must be a boolean.




let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];
const findingTheNumber=array.includes(14);
console.log(findingTheNumber);

// Task 2 → Write a program to check if every element in the array is above 80 or not. Returned value must be a boolean.
const find_element_above_80=array.every(array=>array>=80);
console.log(find_element_above_80);

