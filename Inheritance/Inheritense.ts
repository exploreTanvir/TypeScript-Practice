class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`UserName: ${this.userName}, age: ${this.age}`);
  }
}
// Object
//   let user1 = new User("Tanvir", 123);
//   user1.display()

//   let user2 = new User("Raju", 456);
//   user2.display()

//Inherite class

class Student extends User {
  StudentId: number;

  constructor(userName: string, age: number, StudentId: number) {
    super(userName, age);
    this.StudentId = StudentId;
  }
  display(): void {
    console.log(
      `UserName: ${this.userName}, age: ${this.age}, ID: ${this.StudentId}`
    );
  }
}

let Student1 = new Student("Tanvir", 123, 532987);
Student1.display();
