isKeyObject.on(("connection",(socket)=>{
  socket.io("chat message",(msg)=>{
    io.emit("chat message",msg);
  })
}))


//now if i want to make a room 
socket.join("room1");
io.to("room1").emit("message","heelo");
















