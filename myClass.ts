class UserClass {
  email: string; // Always mention attributes in TS
  username: string;
  readonly password: string;

  constructor(email: string, passwords: string) {
    // Always mention parameter types
    this.email = email;
    this.username = email.split("@").toString();
    this.password = `changeMyPassword${this.email}`;
  }
}

let zuraizC = new UserClass("1@gmail.com", "");
