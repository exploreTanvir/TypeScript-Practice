// Access Modifier
// Public
// Private
// Protected
// ReadOnly
var User = /** @class */ (function () {
    function User(userName, age, Uid, className) {
        this.userName = userName;
        this.age = age;
        this.Uid = Uid;
        this.className = className;
    }
    User.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", age: ").concat(this.age, ",ID: ").concat(this.Uid, ", Class Name: ").concat(this.className));
    };
    // for set private member
    User.prototype.setUID = function (Uid) {
        this.Uid = Uid;
    };
    //for see private member
    User.prototype.getUID = function () {
        return this.Uid;
    };
    return User;
}());
// Object
var user1 = new User("Raju", 123, 55, 6);
user1.setUID(586);
console.log(user1.getUID());
console.log(user1.className);
user1.display();
//   let user2 = new User("Raju", 456);
//   user2.display()
//Inherite class
