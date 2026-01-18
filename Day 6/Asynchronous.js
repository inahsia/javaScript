// execute aa function once after a given delay
setTimeout(
  ()=>{
    console.log("Hello");
  },5000
);

// setInterval()

setInterval(()=>{
  freq={};
nums=[1,2,2,2,3];
for (let i of nums){
  if (freq[i]){
    freq[i]++;
  }
  else{
    freq[i]=1;

  }

}
console.log(freq);
},5000

)



// what is Call back
// A function passed as an argument to another function and executed later

function greet(name,callback){
  console.log("Hello"+name);
  callback();
}
function sayBye(){
  console.log("Bye")!

}
greet("Aishani",sayBye);
// Callback allows asynchronous behavior






// CALLBACK HELL
function step1(callback){
  console.log("step 1")
  callback()
}
function step2(callback) {
  console.log("Step 2");
  callback();
}

function step3(callback) {
  console.log("Step 3");
  callback();
}

step1(()=>{
  step2(()=>{
    step3(()=>{
      console.log("all steps completed")
    })
  })
})



// solution for this 
// in this no calbacks are passed as argument
function step1(){
  return new Promise((resolve)=>{
    console.log("step1")
    resolve();
  });
}
function step2() {
  return new Promise((resolve) => {
    console.log("Step 2");
    resolve();
  });
}

function step3() {
  return new Promise((resolve) => {
    console.log("Step 3");
    resolve();
  });
}
step1().then(()=>step2())
.then(()=>step3())
.then(()=>{
  console.log("all steps completed");
}).catch((error)=>{
  console.log(error);
});

// promises
// an object representing future completeion or failure of an async operations
states
// pending 
// fullfilled 
// rejected



const fetchData = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Data received");
  else reject("Error");
});
fetchData.then(result=>console.log(result))
.catch(error=>console.log(error));


// PROMISE CHAINING
// using multiple .then() calls to execte async task sequentially 
new Promise(resolve => resolve(1))
  .then(result => result * 2)
  .then(result => result * 3)
  .then(result => console.log(result));

// async/await
async function getData(){
  try{
    const data=await 
  }
}


async function runSteps(){
  try{
    await step1();
    await step2();
    await step3();
    console.log("all stes completed");
  }catch (error){
    console.log(error);
  }
}

runSteps();








function greet(names,callback){
  console.log(`this is ${names}`);
  callback() ;

}


function namesss(){
console.log("hellllllo");

}

greet("aishani",namesss)






















=======================================
function step1(){
  return new Promise((resolve)=>{
    resolve("this going to  work in some manner");
    return 2;
  });
}
function step2(x) {
  return new Promise((resolve) => {
    
    resolve(`${x} is working `);
    return resolve ;
  });
}
function step3(){
  return new Promise((resolve)=>{
    console.log("step3")
    resolve();
  });
}



step1()
.then(()=>{
 console.log("this is it")
  step2(2);
})
.then(()=>{
  console.log("this is step ")
  step3();
})
.catch((error)=>{
  console.log(error);
});



/////////////////////////////////////////////////////////////////////////////////////////////
.then(()=>step3())








TO-DO List 
//  in to do like what we will do is 


