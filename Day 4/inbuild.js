// String.prototype.charAt()
// String.prototype.charCodeAt()
// String.prototype.codePointAt()
// String.prototype.concat()
// String.prototype.endsWith()

// /charAt()
names="Hi my name i Aishani Singh";
names.charAt(4);

// charCodeAt
// give you the unicode-transfromation-format 
// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
names="hi this is aishani singh"
names.charCodeAt(4);

// The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. 

const icons="a";
icons.codePointAt(0);

// we are  that is unicode point value



// concatinate
const str1="hello";
const str2="world";


console.log(str1.concat(",",str2));


// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
// endsWith(searchString, endPosition(where it should suppose to be ))
str1="this is my string";
str1.endsWith("string");




