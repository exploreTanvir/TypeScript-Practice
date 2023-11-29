interface IuserINfo {
  formateUser: () => string;
}

class User implements IuserINfo {
  constructor(public UserName: string, public UserAge: number) {}

  formateUser = () => {
    return `Name : ${this.UserName} Age: ${this.UserAge}`;
  };
}

let user1 = new User("Tanvir", 22);

console.log(user1.formateUser());
