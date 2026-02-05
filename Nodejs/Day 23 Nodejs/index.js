const fs=require('fs')
// also we can even add node:fs=>its like a newer version thig , it will reduce conflicts and all
//const fs=require('node:fs')
const file_read=fs.readFileSync('notes.txt','utf-8')

fs.writeFileSync('copy.txt',file_read,'utf-8')

//or 

const copy=fs.writeFileSync('copy.txt',file_read,'utf-8')
console.log(file_read);


// appending one content in another
fs.appendFileSync('copy.txt',file_read,'utf-8');


fs.appendFileSync('copy.txt','\n\n\n hey bro sup','utf-8');

//if i want to create a new folder 
// fs.mkdirSync('games/xyz/a', {recursive:true})

//if i want to remove the directory then i will use
// fs.rmdirSync('games')

fs.unlinkSync('copy.txt');