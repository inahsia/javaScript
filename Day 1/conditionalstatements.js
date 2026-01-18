// to implement some conditions in the code

// if statement

// real world example 
// let color;
// if (mode==="dark-mode")
// {
//   color="black";
// }


// conditional statements

let age=25;
if (age>18){
 console.log("damn son you got a nice driving skills");

}else{
  console.log("your should drive when you are of your age bro ");
}

// different case

if (age<18){
  console.log('junior');
}
else if (age>60){
  console.log("senior");
}
else{
  console.log("middle");
}

// Ternary Operators
// condition ? true output :false output
age=10;
m=age>18 ?"adult":"not adult";
console.log(m);

// switch statment 

const fruit='apple';
switch (fruit){
  case 'Orange':
    console.log('Orange it is');
    break;
  case 'apple':
    console.log('apple are sweet');
    break;

  default:
    console.log('sorry got no options');
  
}




