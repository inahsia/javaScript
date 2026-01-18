const user={
  name:"aishani",
  price:999,
  welcomeMessage:function()
  {
      console.log(`${this.name}, welcome to website`);
  }


}
user.welcomeMessage()

//"this" refers the current context

function intro(city){
  console.log(this.name+"from"+ city);
}

const uder={name:"aishani"};

intro.call(uder,"delhi");







