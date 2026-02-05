//if i am require to use some module i will say it in here
const fs=require('fs')

const content=fs.readFileSync('notes.txt','utf-8');
console.log(content);