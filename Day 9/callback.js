function delayedExecution(num,callback){
  setTimeout(()=>{
    callback(num)
  },5000);
}

delayedExecution(100,(callback)=>{
  console.log("execution",callback);
  delayedExecution(200,(callback)=>{
    console.log("execution",callback);
  })

})
=====================================================================
function calculate(a,b,operations){
  setTimeout(()=>{
      return operations(a,b);
  },2000);

}

calculate(2,3,(a,b)=>{
  console.log("a+b=",a+b);
    calculate(4,5,(a,b)=>{
      console.log("a-b",a-b);
    })
})
==================================================================
function calculate(a,b,operations){
  setTimeout(()=>{
     operations(a,b);
  },2000);
}
=
calculate(2,3,(a,b)=>{
  console.log("a+b=",a+b);
    calculate(4,5,(a,b)=>{
      console.log("a-b",a-b);
    })
})

======================================================================
function step1(num,callback) {
  setTimeout(()=>{

      callback(num);
  },1000)

}
step1(1,(num)=>{
  console.log(num);
  step1(2,(num)=>{
    console.log(num);
  })
})







======================================================================
const promise =new Promise((resolve,reject)=>{
  resolve("success !");
});
promise.then(result=>console.log(result))

// Convert a callback-based function into a Promise

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

// promise version 
function fetchData() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve("Data received");
  }, 1000);
  })

}

fetchData().then(data=>console.log(data));


=====================================================================
new Promise(resolve => {
  resolve(1);
})
.then(result => result + 1)
.then(result => result + 1)
.then(result => console.log(result)); 


=====================================================================
// Replace Callback hell using promises
setTimeout(()=>{
  console.log("step 1");
  setTimeout(()=>{
    console.log("step 2");
  },1000);
},1000);


//promise version
function delay(message) {
  return new Promise(resolve => {
    setTimeout(() => resolve(message), 1000);
  });
}

delay("step1")
.then(msg=>{
  console.log(msg);
  return delay("step 2");
})
.then(msg => console.log(msg));


======================================================================
const mypromise=new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve('promise resolved after 2 seconds');
  },2000);
});


mypromise.then((message)=>
{
  console.log(message);
})


// TO DO THIS
// Create the first promise
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, 1000);
});

// Chain the second promise
const secondPromise = firstPromise.then((message) => {
    console.log(message); // Log the message from the first promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second promise resolved');
        }, 1000);
    });
});

// Chain the third promise
secondPromise.then((message) => {
    console.log(message); // Log the message from the second promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Third promise resolved');
        }, 1000);
    });
}).then((message) => {
    console.log(message); // Log the message from the third promise
});


======================================================================
const promise1=new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve('first promise resolved after 1 second');
  })
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved after 2 seconds');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved after 3 seconds');
    }, 3000);
});

Promise.all([promise1,promise2,promise3])
.then ((messages)=>{
  console.log("alll promises works");
})
.catch((error)=>{
  console.Error('one of the promise rejected',error);
})


======================================================================
const promise1=new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve('first promise resolved after 1 second');
  })
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Second promise resolved after 2 seconds');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved after 3 seconds');
    }, 3000);
});

Promise.all([promise1,promise2,promise3])
.then ((messages)=>{
  console.log("alll promises works");
})
.catch((error)=>{
  console.error('one of the promise rejected',error);
})


======================================================================

//  passing callback with reference
function calculate(a,b,callback){
  callback(a,b);

}
calculate(5,6,function(x,y){
  console.log(x+y);
});


======================================================================
function loginUser(username,callback){
 setTimeout(()=>{
  console.log("user logged in",username);
  callback({userId:101});
 },1000);
}
function getProfile(User,callback){
  setTimeout(()=>{
    console.log("fetch profile for ",User.userId);
    callback({...User,name:"aishani"}
    );

  },1000);

}

loginUser("aishani",(User)=>{
   getProfile(User, (profile) => {
    console.log(profile);})

})

===============================================================


function step1(num,callback){
  setTimeout(()=>{
      callback(num);
  },1000);

}

step1(1,(num)=>{
  console.log(num);
  step1(2,(num)=>{
    console.log(num);
    step1(3,(num)=>{
      console.log(num);
    })
  })
})




function step1(num){
return new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(num);
  },5000)
});
}

step1(1)
.then((num)=>{
console.log(num)
return step1(3);
})
.then((num)=>{
  console.log(num);

})



======================================================================
function calculate(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({a,b});
    },2000);
  })
}
calculate(2,3)
.then(({a,b})=>{
  let m=a+b;
  console.log(m);
  return calculate(2,3);
})
.then(({a,b})=>{
   let m=a-b;
  console.log(m);

})
.catch((error)=>{
  console.log(error);
});




function calculate(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({a,b});
    },2000);
  })
}

async function runfunctionThis(a,b){
  try{
    const {a,b}=await calculate(1,2);
    let sum=a+b;
    console.log(sum);

    const {a:a1,b:b2}=await calculate(3,4);
    let sub=a1-b2;
    console.log(sub)
  }
  catch(error){
    console.log(error)
  }
}


runfunctionThis()








// async/await 
function calculate(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ a, b });
    }, 2000);
  });
}


async function runCalculate(){
  try{
    const {a,b}=await calculate(2,3);
    const sum =a+b;
    console.log(sum);
    
    const { a:a1, b:b2 } = await calculate(2, 3);
    const sub= a1 - b2;
    console.log(sub);


  }
  catch(error){
    console.log(error);

  }
}

runCalculate()

function step1(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 5000);
  });
}


async function runSteps(){
  try
{
  const first=await step1(1);
  console.log(first);
    const second = await step1(3);
    console.log(second);

}catch(error){
  console.log(error);
}


}
runSteps();










function calculate(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({a,b});
    },2000);
  })
}

async function runfunctionThis(a,b){
  try{
    const {a,b}=await calculate(1,2);
    let sum=a+b;
    console.log(sum);

    const {a:a1,b:b2}=await calculate(3,4);
    let sub=a1-b2;
    console.log(sub)
  }
  catch(error){
    console.log(error)
  }
}

async function runfunctionThis(a,b){
  try{
    const {a,b}=await calculate(1,2);
    let sum=a+b;
    console.log(sum);

    const {a:a1,b:b2}=await calculate(3,4);
    let sub=a1-b2;
    console.log(sub)
  }
  catch(error){
    console.log(error)
  }
}























var b=0;

function add(){
  let a=0;
  a=2;
  console.log(a);
}

console.log(a);
console.log(b);



========================================================================================================================================
                                                                                                                    
event loops 
optional chainning 
shallow copy to deep copy concepts 
scopes
block and function scope ,local scope
null and undefined 
arrow and normal funcyion 
function declartion and function expression 
callback functtion 
closures and hoisting 
return, and return await why we useand when 
object destructuring 
splice and slice difference 
map and foreach having promises
for of and for in  working of promises 
lexical scope 
settimeout and set
throw error and throw new error 
rest operator and nullish operator
========================================================================================================================================

const name="my name is aishani singh   ";
trimedName=name.trim().split(" ");
trimedName.map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");



