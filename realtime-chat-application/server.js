import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import bcrypt from 'bcrypt'

const app=express()
const server=http.createServer(app);
const io=new Server(server);

app.use(express.static("public"))
app.use(express.json())

const users=[];


app.post('/register',async(req,res)=>{
  const {username,password}=req.body;
  const userExists=users.find(u=>u.username===username);
  if(userExists){
    return res.status(400).json({message:"useralreay exists"});
  }

  const hashpassword=await bcrypt.hash(password,10);

  users.push({username,
    password:hashpassword
  });
  res.json({ message: "User registered successfully" });
});

// socket middleware
const chatNamespace=io.of('/chat');
chatNamespace.use(async(socket,next)=>{
  const {username,password}=socket.handshake.auth;
  const user=users.find(u=>u.username===username);
  if(!user){
    return next(new Error("user not found"));
  }
  const isvalid=await bcrypt.compare(password,user.password);
    if (!isvalid) {
    return next(new Error("Invalid password"));
  }
  socket.username=username;
  next();


});
//socket connection
chatNamespace.on("connection",(socket=>{
  console.log("User connected",socket.username);
  socket.on("joinRoom",(room)=>{
    socket.join(room);
    socket.room=room;
    chatNamespace.to(room).emit("message",`${socket.username} joined ${room}`);
  });

  socket.on("chatMessage",(msg)=>{
    chatNamespace.to(socket.room).emit(
      "message",`${socket.username}:${msg}`
    );
  });


}))

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});