// for await...of statements create a loop interating over async iterable objects
// generator function ->
// cause to pause execution , can resume later and return values one at a time 
async function *myGenerator(){
  yield 1;
  yield 2;
  yield 3;

}

(async()=>{
  for await (const num of myGenerator() ){
    for await (const num of foo()){
      console.log(num);

      break;
    }

  }
})();