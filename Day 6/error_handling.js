console.log(x);
// when x is not even defined 

const promi=new Promise((resolve,reject)=>{
  let success=true;
  if (success){
    resolve("Data loaded");
  }
  else{
    reject("something is wrong witttth you");
  }
});

// .then() runs only if promise is resolved

promi.then((result=>console.log(result);
));

// handling error with .catch 
promi.catch((error)=>{
  console.log(error);
});



// try and catch 

const promise=new Promise((resolve,reject)=>{
  let marks=40;
  if (mark>=35){
    resolve('pass !you passed son');
  }
  else{
    reject("Fail");
  }


});

promise.then((result)=>{console.log(result);})
.catch((error)=>{
  console.log(error);
});


// try{
//   let resuly =10/a ;
//   console.log(result);

// }
// catch(error){
//   console.log("error");

// }

function getData(){
  return new Promise((resolve,reject)=>{
    let success = false;
    if (success){
      resolve("Data loaded");
    }
    else{
      reject("something is wrong")
    }

  });
}


async function fetchData(){
  try{const result=await getData();
    console.log(result);
    }
  catch(error){
    console.log("Error",error)
  }

}

fetchData();



// agr hum promise chaining 
getData()
.then((result)=>{
  console.log(result);

});

.catch((error)=>{
  console.log("error",error);
});


//////////////////////////////////////////////////////////////////////
// fetch send network request(GET,POST,PUT,DELETE,ETC)
// work async 
// return a promise








// fetch api
async function getUser(){
  try{
    const response=await fetch ("www................");
    const data=await response.json();
    console.log(data);
  }
  catch (error){
    console.log("Error",error)
  }
}
getUser();

