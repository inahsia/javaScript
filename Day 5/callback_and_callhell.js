function greet(name,callback){
  console.log("hello"+name);
  callback();}

  function sayBye(){
    console.log("Bye!");
  }

greet("Aishani Singh",sayBye);



// Asynchronous
function fetchData(callback){
  console.log("fetching data..............");
  setTimerout(()=>{
    callback("data recieved")
  },2000);

}


fetchData((data) => {
  console.log(data);
});


// what is callback hell
setTimeout(()=>{
  console.log("step 1");
  setTimeout(()={
    console.log("step 2");
    setTimeout(()=>{
      console.log("step 3");
    },1000);
  },1000);
},1000);



// dooooomed broo

// how to avoid callback hellllll
// use named function

function step1(){
  setTimeout(step2,1000);

}
function step2(){
  setTimeout(step3,1000);
}
function step3(){
  console.log("Done");
}

step1();



// using promises
doTask()
.then(step1)
.then(step2)
.then(step3)
.catch(error=console.log(error));


async function runTasks() {
  try {
    await step1();
    await step2();
    await step3();
    console.log("Done");
  } catch (error) {
    console.log(error);
  }
}
////////////////////////////////////////////////////////////////////

console.log("one")
console.log("two")
console.log("three")
setTimeout(()=>{
  console.log("hello");
},4000);
console.log("four")


//////////////////////////////////////////////////////////////////////
function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("data",dataId);
    if (getNextData){
      getNextData();
    }
  },2000);
}

// this is a very complex thing
// pyramid Doom
getData(1,()=>{
  getData(2,()=>{
    getData(3,()=>{
       getData(4);
    })
  });
});

// concept of promises

let promise=new Promise((resolve,reject)=>{

  console.log("i am a promise");
  resolve("successful");

})

// promises->pending 
// ->fullfilled
// ->rejected


function getData(dataId,getNextData){
  return new Promise ((resolve,reject)=>
  {
    setTimeout(()=>{
      // console.log("data",dataId);
      // resolve("success")
      reject("reject");
    },5000);
  });


}


// promises
// .then & .catch()
promise.then((res)=> {

})

promise.catch((error)=>{


})



function asyncfun(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("some data1");
      resolve("success");
    },4000);
  });
}

function asyncfun1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("some data1");
      resolve("success");
    },4000);
  });
}


console.log("fetching data1");
let p1=asyncfun();
p1.then((res)=>{
  console.log(res);
  console.log("fetching data2...");
  let p2=asyncfun1();
  p2.then((res)=>{
    console.log(res);
  })
});



// promise chain or this pyramid doom
getData(1,()=>{
  getData(2,()=>{
    getData(3,()=>{
       getData(4);
    })
  });
});




///////////////////////////////////////////////////
function getData(dataId,getNextData){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
    console.log("data",dataId);
    resolve('damn')
  },2000);
  })

}
// promise chain
getData(1)
.then((res)=>{
  return getData(2);
  console.log
})
.then((res)=>{
  return getData(3);
})
.then((res)=>{
  return getData(success);
})


// Async-Await
// async returns a promise
// await pauses the execution of its surrounding async fun until the promise is settled
async function api(){

  setTimeout(()=>{
    return new Promise((resolve,reject)=>{
    console.log("weather data");
    resolve("success");

  });
  },4000);
}
await api();

await api();


// ----------------------------------------------------------//


function greet(name,callback){
  console.log("hello"+name);
  callback();
}
greet("aishani singh",()=>{
  console.log("Bye")
})

// --------------------------------------------------------------//

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  }, 1000);
}, 1000);



// so using promises
const promise= new Promise ((resolve,reject)=>{
  resolve("success");
});

// consume promise
p1.then(results=> console.log(result))
p1.catch(error => console.log(error));

// promise chaining is executing multiple async operations one after another using .then()
// Every .then() returns a new promise.



console.log("one");
  function dataGet(data,nextdata){
  setTimeout(()=>{
    return new Promise((resolve,reject)=>{
      console.log("this i")
      resolve("success")
    })
  },4000);
}
let promise_1=dataGet(1,dataGet)
.then



// CALLBACK HELL
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  }, 1000);
}, 1000);




// for example we are talking a function like step1()
function steps1(){
  return new Promise((resolve,reject)=>{
    success=true;
    if (success){
      resolve("yesss lessgo");
    }
    else{
      reject("booo!");

    }
  });

}
  function steps2(){
  return new Promise((resolve,reject)=>{
    success=true;
    if (success){
      resolve("yesss lessgo");
    }
    else{
      reject("booo!");

    }
  });
  }


  function steps3(){
  return new Promise((resolve,reject)=>{
    success=true;
    if (success){
      resolve("yesss lessgo");
    }
    else{
      reject("booo!");

    }
  });
  }






step1().then(()=>step2())
.then(()=>step3())
.then(()=>{
  console.log("yess");
})
.catch(()=>{
    console.log("error");
})


async function nameConvension(){
  try{
    await steps1();
    await steps2();
    await steps3();
  }
  catch(error){
    console.log(error);
  }

}

