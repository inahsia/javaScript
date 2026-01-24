function step1(){
return new Promise(resolve => {
setTimeout(() => 
  resolve("Step 1 complete"), 1000);
});
}

function step2(data: string) {
return new Promise(resolve => {
setTimeout(() =>
   resolve(`${data} → Step 2 complete`), 1000);
});
}

function step3(data: string) {
return new Promise(resolve => {
setTimeout(() =>
   resolve(`${data} → Step 3 complete`), 1000);
});
}


step1()
.then((num)=>{
  console.log(num);
  return step2(num);
})
.then((num1)=>{
  console.log(num1);
  return step3(num1);
})
.then((prop)=>{

  console.log(prop);

})
.catch(error){
  console.log(error);
}





