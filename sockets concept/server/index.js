import express from 'express'
import {Server} from 'socket.io'
import http from 'http'
import path from 'path'
// import { Socket } from 'dgram';

const PORT=3000;
const app=express();
// now we are creating http server
const server=http.createServer(app);
app.use(express.static(path.resolve("./public")));
const io=new Server(server);
  
//socket io handling

// io.on('connection',(socket)=>{
//   console.log("a new user connected",socket.io);
// })


io.on("connection",(socket)=>{
  socket.on('user-message',message=>{
    io.emit('message',message);
  });
});

app.get('/',(req,res)=>{
  return res.sendFile("/public/index.html");
})



server.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
})