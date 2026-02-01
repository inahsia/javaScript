// if u want to accept more than one type of datatype we use union
export{}
let score:number |string |boolean=33;

score=44;
score="55";
score=true;


//example=>>
type User={
  name:string;
  id:number;
}

type Admin={
  username:string;
  id:number
}

let hitesh:User|Admin={
  name:"aishani singh",id:22
}

hitesh={username:"shreya",id:44}


function getDbId(id:number|string){
  // making some api calls
  if (typeof(id)==="number"){
    return id
  }
  else{
    return id.toLowerCase();
  }
}



// more examples
const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]

//nor i want want both datatypes for array i will do is
// but array should either be of all the strings or all the numbers
// in this case
const data3:string []|number []=["2","9"]
// you can add both the datatypes in one array

const data4:(string|number)[]=["2","9",4]


// also different cases
let seatAllotment:"aisel" | "middle" | "window"

seatAllotment='aisel'
// seatAllotment="crew"