// Function signature
// function structure
let user1: () => void;
let user2: (name: string) => void;
let user3: (name: string, age: number) => string;

user1 = () => {
  console.log("This is from user1 function");
};

user2 = (name: string) => {
  console.log(`This is from user2 function and ${name} is just 20 years old`);
};

user3 = (name: string, age: number) => {
  return `This is from user3 function and ${name} is just ${age} years old`;
};

user1();
user2("Tanvir Hossen Raju");
console.log(user3("Tanvir Hossen Raju", 20));
