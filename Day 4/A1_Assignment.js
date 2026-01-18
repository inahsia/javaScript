// Converts the first letter of string in upper case

let names="         aishani is singh ".trim().split(" ");
let a=names.map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
console.log(a);






