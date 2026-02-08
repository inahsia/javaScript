const http=require('node:http')
const server=http.createServer((req,res)=>{
  path=req.url;
  Method=req.method;
  switch (Method){
    case 'POST':

      switch(path){
        case '/tweet':
            res.writeHead(201);
            res.end('Do a fake DB operations and send the ack that it is done');
        break;
      }
    case 'GET':
      switch (path){ 
        case '/':
            res.writeHead(200);
            res.end('Do a fake DB operations and send the ack that it is done');

          break;
        case '/contact-us':
            res.writeHead(200);
            res.end('Send your email and contact number to the user');
          break;
        case '/tweet':
            res.writeHead(200);
            res.end('Do a fake DB operations and send the ack that it is done');
      }
  }
}
)
server.listen(8000,()=>{
  console.log("server is running here man");
})