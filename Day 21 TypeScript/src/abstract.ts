abstract class TakePhotos{
  constructor(
    public cameraMode:string,
    public filter:string

  ){

  }
  getsepia():void
}

// const object1=new TakePhotos("test","test");

// we can access or make a new objwct with inheritance class that what i understand


// an abstract class is an imcomplete class meant to be inherited ,not created

abstract class Animal{}
const a=new Animal();


abstract class Animals{
  abstract makeSounds():void;
}

class Dog extends Animals{
  makeSounds(){
    console.log("barks")
  }
}

class Cat extends Animals{
  makeSounds(){
    console.log("Meow")
  }
}

const d=new Dog();
d.makeSounds();



