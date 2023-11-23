// Built in data type
var firstName;
var lastName;
var id;
var isActivet;
firstName = "Tanvir";
lastName = " Hossen Raju";
id = 532987;
isActivet = true;
function func() {
    console.log("hi i am function");
}
func();
console.log("Your Id = ".concat(id, " and your name is ").concat(firstName).concat(lastName));
// Built in data type
// union type
var userId;
userId = "Tanvir";
userId = 532987;
function unionType(userID) {
    console.log(userID);
}
unionType("202");
unionType(202);
// Array type
var uName;
uName = ["Tanvir", "Raju", "Rohim"];
console.log(uName[1]);
// Tuple type
var tupleType;
tupleType = [101, "Tanvir"];
tupleType.push(102, "Raju");
console.log(tupleType);
//Enum type- store constant value thats why duplicate value is not allowed here.
//enum  basically 3 type ...1/numeric 2/string 3/hetergenous
//Numeric enum
var enumData1;
(function (enumData1) {
    enumData1[enumData1["ReadData"] = 3] = "ReadData";
    enumData1[enumData1["SaveData"] = 6] = "SaveData";
    enumData1[enumData1["DeleteData"] = 7] = "DeleteData";
})(enumData1 || (enumData1 = {}));
console.log(enumData1);
//String enum
var enumData2;
(function (enumData2) {
    enumData2["ReadData"] = "Tanvir";
    enumData2["SaveData"] = "Raju";
})(enumData2 || (enumData2 = {}));
console.log(enumData2);
//hetergenous type enum/mixed type enum
var enumData3;
(function (enumData3) {
    enumData3["ReadData"] = "Tanvir";
    enumData3["SaveData"] = "Raju";
    enumData3[enumData3["id"] = 101] = "id";
})(enumData3 || (enumData3 = {}));
console.log(enumData3);
