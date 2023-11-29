interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "Tanvir",
  age: 20,
};

let user2: IUser = {
  id: 2,
  name: "Raju",
  age: 30,
};

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser) => {
  console.log(`UserID: ${user.id} UserName: ${user.name} and UserAge: ${user.age}`)
};
users.forEach((user) => {
  printUserInfo(user);
});

