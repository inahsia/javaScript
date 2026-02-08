const http=require('node:http');
const server=http.createServer((req,res)=>{
  console.log(req.headers);
  console.log(req.method);
  console.log(req.url);


switch(req.url){

  case '/':
    res.writeHead(200);
    res.end('welcome home')
    break;

  case '/about':
    res.writeHead(200);
    res.end('This is the about page')
    break;

  default:
    res.writeHead(404);
    res.end("cant see");

}
})

server.listen(8000,()=>{
  console.log("server running on port 8k");
})