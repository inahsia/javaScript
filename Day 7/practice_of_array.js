// concat()
[1,2].concat([3,4]);

// every
[2,3,4].every()
// check if all elements passes the consdition

// filter
[1,2,3,4,5].filter(n => n % 2 === 0);

// flat()
[1,2,3,[4,5],6].flat(2);

[1,2].flatMap(n=>[n,n*n]);

// forEach()
[1, 2, 3].forEach(n => console.log(n));

// indexOf()
["a","b","a"].indexOf("a");

// lastIndexOf()
["a","b","a"].lastIndexOf("a");

// map()
[1,2,3].map(n=>n*2);

// reduce 
[1,2,3].reduce((sum,value)=>sum+n,0);
[1,2,3].reverse();

// slice()

[1,2,3,4].slice(1,3);

// some()
[1,3,5].some(n=>n%2===0);
// callback() is present 

// sort()
[3,2,1].sort((a,b)=>a-b);

// splice()
let arr=[1,2,3];
arr.splice(1,2);


// entries
[10,20].entries();

// fill()
[1,2,3,4].fill(10);

find()
// values are undefined

// findIndex()
[5,12,8].findIndex(n=>n>10);

[2,3,4,5,6].findLast(n=>n===2);

// include
includes()

// Checks value exists

// Return: boolean

[1, 2, 3].includes(2);

// join()
["A","B","c"].join("-");

[10,20].keys();
[10,20].values();


