// see for -of is for synchronous
// but when you need Async stuff

// its particularly wait for each prmises to resolve


async function run() {
  const promises=[
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];

  for await (const value of promises)
  {
    console.log(value);

  }
  
}

run();



// Array of promises
for await (const a of [Promise.resolve(10),Promise.resolve(20),Promise.resolve(30)])
{
  console.log(a);
}


// async gen 
// An async generator produces values over time.
// Data comes step by step

// Streaming

// Pagination

// WebSockets

// Large files

async function* numbers(){
  yield 1;
  yield 2;
  yield 3;
}

for await (let n of numbers())
{
  console.log(n);
}

