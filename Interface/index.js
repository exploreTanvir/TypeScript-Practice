var users = [];
var user1 = {
    id: 1,
    name: "Tanvir",
    age: 20,
};
var user2 = {
    id: 2,
    name: "Raju",
    age: 30,
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("UserID: ".concat(user.id, " UserName: ").concat(user.name, " and UserAge: ").concat(user.age));
};
users.forEach(function (user) {
    printUserInfo(user);
});
