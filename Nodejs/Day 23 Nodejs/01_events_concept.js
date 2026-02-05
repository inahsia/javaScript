const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('greet',(username)=>{
console.log(`hello ${username} and welcome to events in node js `)
}) 

eventEmitter.once('pushNotification',(username)=>{
  console.log(`hello ${username} , whatsup, how are u all doing is the main task`)
})
//emit the event
eventEmitter.emit('greet',"aishani");
eventEmitter.emit('greet',"aishani");
eventEmitter.emit('greet',"aishani");
eventEmitter.emit('pushNotification','aishani_singh');

eventEmitter.emit('pushNotification','aishani_singh');
