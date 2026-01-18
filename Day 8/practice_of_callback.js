
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




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function add(a,b,callback){
  const result=a+b;
  callback(result);
}
function sub(a,b,callback){
  const result=a-b;
  callback(result);
}

function multi(a,b,callback){
  const result=a*b;
  callback(result);
}

function div(a,b,callback){
  const result=a/b;
  callback(result);

}


add(1,2,(callback)=>{
  console.log("for add ",callback);
  sub(2,3,(callback)=>{
    console.log("for sub",callback);
    multi(3,4,(callback)=>{
      console.log("for multi",callback);
      div(2,5,(callback)=>{
        console.log("for multi",callback);

      })
    })
  })
})

 

// basics of this 
// callback



// function sum(a,b){
//   console.log(a+b);
// }

// function calculator(a,b,sumcallback)
// {
//   sumcallback(a,b);
// }

function calculator(a,b,callback){
  setTimeout(()=>{
    callback(a,b);
  },2000);

};

// or by , we can also define a function 

calculator(1,2,(a,b)=>{
  let m=a+b;
  console.log(`a+b, ${m}`);
  calculator(3,4,(a,b)=>{
    let m=a-b
    console.log(`a-b ,${m}`);
    calculator(5,6,(a,b)=>{
    let m=a*b
    console.log(`a*b ,${m}`);
    })
  })
})



==========================================
function calculator(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({a,b});
    }, 2000);
  });


}

async function runcalculator(){
  const sum=await calculator((1,2)=>{
    let m=a+b;
    console.log(`a+b=`,m);
  });

  const diff=await calculator((a,b)=>{
    let m=a-b;
    console.log(`a+b=`,m);
  })
}

runcalculator()
































// now we get to promises
let promise=new Promise((resolve,reject)=>{
  console.log("i am a promise");
  resolve(123);
})


function getData(dataId,getNextData){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",dataId);
      resolve("success");
    },5000)
  });
}


// .then() and .catch()

const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("this is an promise");
    reject("123");
  });
};



let promise=getPromise(res)
.then(()=>{
  console.log("the promise is fullfilled")
})


promise.catch((error)=>{
  console.log("rejected");
})















function calculator(a,b,callback){
  setTimeout(()=>{
    callback(a,b);
  },2000);

};

// or by , we can also define a function 

calculator(1,2,(a,b)=>{
  let m=a+b;
  console.log(`a+b, ${m}`);
  calculator(3,4,(a,b)=>{
    let m=a-b
    console.log(`a-b ,${m}`);
    calculator(5,6,(a,b)=>{
    let m=a*b
    console.log(`a*b ,${m}`);
    })
  })
})


// promises


function calculator(a,b){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({a,b})
    },2000)
  });

}


calculator(1,2)
.then(({a,b})=>{
let m=a+b;
console.log("a+b=",m);
return  calculator(3,4);
})
.then(({a,b})=>{
  let m=a-b;
console.log("a-b=",m);  
return calculator(3,4);
})
.then(({a,b})=>{
  let m=a*b;
console.log("a*b=",m);

})



calculator(1,2)
.then(({a,b})=>{
let m=a+b;
console.log("a+b=",m);
return m;
})
.then((result)=>{
  let m=result-3
console.log("a-b=",m);
return m;
})
.then((result)=>{
  let m=result*3;
console.log("a*b=",m);

})

==============================================================================







