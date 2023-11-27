// Access Modifier
// Public
// Private
// Protected
// ReadOnly

class User {
  public userName: string;
  protected age: number;
  private Uid: number;
  readonly className: number;

  constructor(userName: string, age: number, Uid: number, className: number) {
    this.userName = userName;
    this.age = age;
    this.Uid = Uid;
    this.className = className;
  }

  public display(): void {
    console.log(
      `UserName: ${this.userName}, age: ${this.age},ID: ${this.Uid}, Class Name: ${this.className}`
    );
  }

  // for set private member
  setUID(Uid: number): void {
    this.Uid = Uid;
  }

  //for see private member
  getUID(): number {
    return this.Uid;
  }
}

// Object
let user1 = new User("Raju", 123, 55, 6);
user1.setUID(586);
console.log(user1.getUID());

console.log(user1.className);
user1.display();

//   let user2 = new User("Raju", 456);
//   user2.display()

//Inherite class
