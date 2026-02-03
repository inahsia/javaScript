class User{
  email:string
  name:string
  private readonly city:string="jaipur"
  constructor(email:string,name:string){
    this.email=email;
    this.name=name
  }
}

const object=new User("aishani@gmail.com","AISHANI");
object.city="delhi"


// if i totally dont want it to be accessible then i will use private

class Admin{

  

  constructor(public email:string,
    public name:string,
    private userId:string
  ){

  }


 get getAppleEmail(){
    return `apple${this.email}`
 }

}