// Function signature
// function structure
var user1;
var user2;
var user3;
user1 = function () {
    console.log("This is from user1 function");
};
user2 = function (name) {
    console.log("This is from user2 function and ".concat(name, " is just 20 years old"));
};
user3 = function (name, age) {
    return "This is from user3 function and ".concat(name, " is just ").concat(age, " years old");
};
user1();
user2("Tanvir Hossen Raju");
console.log(user3("Tanvir Hossen Raju", 20));
