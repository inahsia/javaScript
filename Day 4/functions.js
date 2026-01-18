// take a string and return number of vowels

function number_of_vowels(arr){
  count=0;
  m="aeiou";
  for (var i of arr){
    if (i ==="a" || i==="e"|| i==="i"|| i==="o" || i==="u"){
      count+=1
      
    }
    else{
      continue;
    }
}
return count
}
arr="this is a string";
number_of_vowels(arr);


// arrow function as well



const number_of_vowels=(arr)=>{
   count=0;
  m="aeiou";
  for (var i of arr){
    if (i ==="a" || i==="e"|| i==="i"|| i==="o" || i==="u"){
      count+=1
      
    }
    else{
      continue;
    }
}
return count

}


// method is a method 
// forEach loop in array 
arr.forEach(callbackfunc)
// callbackfn here , it is a function to execute for each element in the array 
// callback is a function passed as an argument to another function


var arr=["punjab","delhi","pune"];
arr.forEach((item,idx,arr)=>{
  console.log(item.toUpperCase(),idx,arr);
})
solutions

var arr=["1","2","3"];
arr.forEach((item)=>{
  console.log(item**2);
})

// .apply 



