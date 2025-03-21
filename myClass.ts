class UserClass {
  email: string;
  username: string;
  readonly password: string;

  constructor(email: string, passwords: string) {
    this.email = email;
    this.username = email.split("@").toString();
    this.password = `changeMyPassword${this.email}`;
  }
}

let zuraizC = new UserClass("1@gmail.com", "");
