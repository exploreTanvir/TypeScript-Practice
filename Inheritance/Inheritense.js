var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Object
//   let user1 = new User("Tanvir", 123);
//   user1.display()
//   let user2 = new User("Raju", 456);
//   user2.display()
//Inherite class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, age, StudentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.StudentId = StudentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", age: ").concat(this.age, ", ID: ").concat(this.StudentId));
    };
    return Student;
}(User));
var Student1 = new Student("Tanvir", 123, 532987);
Student1.display();
