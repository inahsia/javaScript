const eventEmitter=require('events');
//we ou rmaking our own class which will have all the other methods of EventEmitter as well as the some custom classes

class chats extends eventEmitter{
  sendMessages(msg){
    console.log(`messages sent :${msg}`);
    this.emit("messagesRecieved",msg);
  }
}

const chat =new chats()
chat.on("sendMessages",(msg)=>{
console.log(`new messages recieved`);
})

chat.sendMessages("Hello")


