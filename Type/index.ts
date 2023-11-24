// Built in data type

let firstName: string;
let lastName: string;
let id: number;
let isActivet: boolean;

firstName = "Tanvir";
lastName = " Hossen Raju";
id = 532987;
isActivet = true;

function func(): void {
  console.log("hi i am function");
}

func();
console.log(`Your Id = ${id} and your name is ${firstName}${lastName}`);

// Built in data type
// union type
var userId: string | number;
userId = "Tanvir";
userId = 532987;

function unionType(userID: string | number) {
  console.log(userID);
}

unionType("202");
unionType(202);

// Array type
var uName: string[];
uName = ["Tanvir", "Raju", "Rohim"];
console.log(uName[1]);

// Tuple type

var tupleType: [number, string];
tupleType = [101, "Tanvir"];
tupleType.push(102, "Raju");

console.log(tupleType);

//Enum type- store constant value thats why duplicate value is not allowed here.
//enum  basically 3 type ...1/numeric 2/string 3/hetergenous

//Numeric enum
enum enumData1 {
  ReadData = 3,
  SaveData = 6,
  DeleteData,
}

console.log(enumData1);

//String enum
enum enumData2 {
  ReadData = "Tanvir",
  SaveData = "Raju",
}

console.log(enumData2);

//hetergenous type enum/mixed type enum
enum enumData3 {
  ReadData = "Tanvir",
  SaveData = "Raju",
  id = 101,
}

console.log(enumData3);

// Object type
let usName: object;
let usName: { userName: string; userID: number };
usName = { userName: "Tanvir", userID: 123 };
console.log(usName);

// example 2

let users: object[];
users = [];
let user1: { UserName: string; UsersID: number };
user1 = { UserName: "Tanvir", UsersID: 123 };
let user2: { UserName: string; UsersID: number };
user2 = { UserName: "Raju", UsersID: 456 };
users.push(user1);
users.push(user2);
console.log(users)
