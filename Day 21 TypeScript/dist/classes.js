class User {
    constructor(email, name) {
        this.city = "jaipur";
        this.email = email;
        this.name = name;
    }
}
const object = new User("aishani@gmail.com", "AISHANI");
object.city = "delhi";
// if i totally dont want it to be accessible then i will use private
class Admin {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
}
export {};
//# sourceMappingURL=classes.js.map