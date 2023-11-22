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
