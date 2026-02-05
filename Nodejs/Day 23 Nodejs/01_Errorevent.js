const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

eventEmitter.on('error',(err)=>{
  console.error(`this error is new man , we need to rectify this${err.message}`);

})

eventEmitter.emit('error',new Error('something is wrong with this whole thing man'));
