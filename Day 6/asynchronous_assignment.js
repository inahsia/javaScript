// Three Promise-based Functions
function func1(flag){
  return new Promise((resolve,reject)=>{
    flag 
    ?resolve("ressolved")
    :reject("rejected");

  });
}
function func2(flag){
  return new Promise((resolve,reject)=>{
    flag 
    ?resolve("ressolved")
    :reject("rejected");

  });
}
function func3(flag){
  return new Promise((resolve,reject)=>{
    flag 
    ?resolve("ressolved")
    :reject("rejected");

  });
}

// Case 1: All arguments are true
Promise.all([func1(true),func2(true),func3(true)])
.then(result=>console.log("parall success:",result))
.catch(error=>console.error("error broo"));
// Case 2: 2 are True and other are false
Promise.all([func1(true),func2(false),func3(true)])
.then(result=>console.log("parall success:",result))
.catch(error=>console.error("error broo"));


// noow we are going to deal with sequential execution 
// promise chaining 
func1(true)
  .then(res => {
    console.log(res);
    return func2(true);
  })
  .then(res => {
    console.log(res);
    return func3(true);
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));


// Case 2: 2nd function argument is false

func1(true)
  .then(res => {
    console.log(res);
    return func2(false);
  })
  .then(res => {
    console.log(res);
    return func3(true);
  })
  .catch(err => console.error(err));

  // 6.2: resolved by func1
// 6.2 Error: rejected by func2

// (Async / Await)
async function asynccase() {
  try {
    console.log( await func1(true));
    console.log( await func2(true));
    console.log(await func3(true));
  } catch (err) {
    console.error(err);
  }
}

asynccase();

async function asynccase2() {
  try {
    console.log("7.2:", await func1(true));
    console.log("7.2:", await func2(false));
    console.log("7.2:", await func3(true));
  } catch (err) {
    console.error("7.2 Error:", err);
  }
}

asynccase2();

