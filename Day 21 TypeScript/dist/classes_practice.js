// classes is basicallya blueprint for creating objects 
// and also we will use constructors to create new objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello , my name is ${this.name}`);
    }
}
const p1 = new Person("Alice", 22);
p1.greet();
// ===============================================
// now we have the concept of access modifiers
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
const car = new Car("honda");
console.log(car.brand);
// ===================================================
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
const acc = new BankAccount();
acc.deposit(100);
// now we have got the concept of getter and setter
class Box {
    constructor() {
        this.secret = 10;
    }
    showSomething() {
        console.log(this.secret);
    }
}
const b = new Box();
b.showSomething();
b.secret;
// ===================================================
class ATM {
    constructor() {
        this._balance = 1000;
    }
    //we will use getter to see balance
    get balance() {
        return this._balance;
    }
    // setter is basically for to change the balance
    set balance(amount) {
        if (amount < 0) {
            console.log("this is invalid");
            return;
        }
        this._balance = amount;
    }
}
const atm = new ATM();
atm.balance = 500;
console.log(atm.balance);
export {};
//# sourceMappingURL=classes_practice.js.map