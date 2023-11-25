class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display():void {
    console.log(`UserName: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User("Tanvir", 123);
user1.display()


let user2 = new User("Raju", 456);
user2.display()
