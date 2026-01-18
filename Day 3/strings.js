const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;//template literal

const string4=new String("A string object");
// character access

const a="a";
const b="b";
if (a<b){
  console.log(`${a} is less than ${b}`);
}
else if (a>b)
{
console.log(`${a} is greater than ${b}`);
}
else{
  console.log(`${a} and ${b} are equal.`);
}


function areEqualCaseInsensitive(str1,str2){
  return str1.toUpperCase()===str2.toUpperCase
}


const strPrime="foo";
const strPrim2=String(1); //"1"
const strPrim3 = String(true);//"true"

const strObj=new String(strPrim);
console.log(typeof strObj);

// eval()
const s1 = "2 + 2"; 
const s2 = new String("2 + 2"); 
console.log(eval(s1)); 
console.log(eval(s2)); 






let names="my name is Aishani";
names.split();
console.log(names)



// substring 
names="my name is aishani ";

names.substring(10);

