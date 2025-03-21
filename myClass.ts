class UserClass {
  email: string; // Always mention attributes in TS
  username: string;
  private password: string; // For make attributes private

  constructor(email: string, passwords: string) {
    // Always mention parameter types
    this.email = email;
    this.username = email.split("@").toString();
    this.password = `changeMyPassword${this.email}`;
  }
}

let zuraizC = new UserClass("1@gmail.com", "");

zuraizC.email = "zoraizaamir2002@gmail.com";
// zuraizC.password = '' // Now its available bbut in readonly its readable but not write able
