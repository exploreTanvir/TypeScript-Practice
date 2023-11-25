var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Tanvir", 123);
user1.display();
var user2 = new User("Raju", 456);
user2.display();
