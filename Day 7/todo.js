

// to make a to do like we need to know 
// we are defining array in here 
let arr1 = [];

function add(a, arr1) {
  arr1.push(a);
  console.log("we have added", a);
}

function Delete(arr1) {
  if (arr1.length === 0) {
    console.log("there is already nothing to add");
  } else {
    // m is a variable which will store values which is deleted
    

    let m = arr1.pop();
    console.log(" we have deleted:", m);
  }
}

while (true) {

  let command = prompt("enter command");

  switch (command) {
    case "1":
      let a = prompt("what would you like to add");
      add(a, arr1);
      break;

    case "2":
      Delete(arr1);
      break;

    case "3":
      console.log("This is To-Do list Bro", arr1);
      break;

    default:
      console.log("is invalid");
  }

  if (command === "4") {
    break;
  }
}
