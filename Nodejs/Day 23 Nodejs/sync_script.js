const fs=require('node:fs');
//now i want to read a filr , notes.txt
console.log('start of the script');
//sync=>Blocking Operations 
// const contents=fs.readFileSync('notes.txt','utf-8');

//if we want to have async functionality
// [Async]=>non-blocking
fs.readFile('notes.txt','utf-8',function (error,data){
  if (error) console.log(error);
  else console.log('Content got',data);
})

fs.readFile('notes.txt','utf-8',(error,data)=>{
  if (error) console.log(error);
  else console.log('Content got',data);
})

console.log('end of the script');