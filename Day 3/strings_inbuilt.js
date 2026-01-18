// toLocaleLowerCase()
console.log("WHATISTHE MEANING".toLocaleLowerCase("tr"));
// toLocaleUpperCase()

console.log("whatismeaningofthis".toLocaleUpperCase("en-US"));
// toLowerCase()

console.log("HELLO".toLowerCase());
// toString()
// return string representation of a value
let str=new String("hello");
str.toString();
// toUpperCase()
// Converts string to uppercase.
"hello".toUpperCase();

// trim()
// removes whitespace from both sides
"  hello  ".trim();

//trimEnd()
// Remove whitespace from end 
"hello   ".trimEnd();

// trimStart()
"   hello".trimStart();

// valueOf()
let str1 = new String("hi");
str1.valueOf();
// "hi"


// substring(start,end)
"JavaScript".substring(0, 4);
// "Java"


// split(separator,limit)
"a,b,c".split(",",2);
//["a","b"]

// startWith(searchstring,position)
"hello bro whats up".startsWith("Hello",0);
// boolean

// repeat(count)
"ha".repeat(2);
//"haha"

//replace(searchValue, newValue)
"apple apple".replace("apple","banana");

// .search(regexp)
// 
"hello123".search("/\d/")
// "1" will be printed'

// slice(start,end)
"hello_broo".slice(1,4)

// includes(searchString,position)
"hello world".includes("world",5);
// boolean 


// indexOf

"hello hello".indexOf("hello",1);
// retturns index from where the index starts




