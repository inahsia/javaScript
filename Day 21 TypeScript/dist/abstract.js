class TakePhotos {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
// const object1=new TakePhotos("test","test");
// we can access or make a new objwct with inheritance class that what i understand
// an abstract class is an imcomplete class meant to be inherited ,not created
class Animal {
}
const a = new Animal();
class Animals {
}
class Dog extends Animals {
    makeSounds() {
        console.log("barks");
    }
}
class Cat extends Animals {
    makeSounds() {
        console.log("Meow");
    }
}
const d = new Dog();
d.makeSounds();
export {};
//# sourceMappingURL=abstract.js.map