// a closure is created when a function remembers variables from its outer scope even after the outer function has finished execution 
function outer(){
  let count=0;
  function inner(){
    count++;
    console.log(count);
  }
  return inner;
}
const fn=outer();