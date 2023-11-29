var User = /** @class */ (function () {
    function User(UserName, UserAge) {
        var _this = this;
        this.UserName = UserName;
        this.UserAge = UserAge;
        this.formateUser = function () {
            return "Name : ".concat(_this.UserName, " Age: ").concat(_this.UserAge);
        };
    }
    return User;
}());
var user1 = new User("Tanvir", 22);
console.log(user1.formateUser());
