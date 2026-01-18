// starting with callback
function greet(name,callback){
  console.log("hello"+name);
  callback;
}

function sayBye(){
  console.log("bye");
}
greet("Aishani Singh",sayBye);

// sayBye is a highest-order function 

function fetchData(callback){
  setTimeout(()=>{
    console.log("Data Fetched");
  },1000);
}

fetchData(()=>{
  console.log("Processing data");

})



// nested Callback
setTimeout(()=>{
  console.log("step 1");
  setTimeout(()=>{
    console.log("step 2");
    setTimeout(()=>{
      console.log("step 3");
    },5000);
  },5000);
},5000);



//////////////////////////////////////////////////////////////////

function add(a,b,callback){
  let result=a+b;
  callback(result);

}

function display(value){
  console.log(value)
}

add(10,20,display);


// Callback with Async Task
function fetchData(callback){
  setTimeout(()=>{
    callback("Data loaded");
  },1000);
}

fetchData((data)=>{
  console.log(data);
})

//////////////////////////////////////////////////////////////////////

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);




// how can i use promise chaining in this 
function delay(ms,message){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(message)
      resolve();
    },ms);
  });
}

delay(1000,"aishani")
.then(()=>delay(1000,"step 2"))
.then(()=>delay(1000,"step 3"))




=====================================================================================================


function step1(num,callback){
  setTimeout(()=>{
     console.log(`i want to print ${num}`);
     if(callback){
     callback();
     }
  },3000);
 
};
step1("aishani",()=>{
  step1("river")
})








// ==============================================

// function name (name,callback){
//   console.log(`name is ${name}`);

// }


// name(aishani,()=>{

// })
















