// Define a type for user objects
type UserType = {
  name: string; // The name of the user
  email: string; // The email address of the user
  isActive: boolean; // Whether the user is active or not
};

// Example user objects
let user1: UserType = {
  name: "zuraiz",
  email: "thezuraiz@gmail.com",
  isActive: false,
};
let user2: UserType = {
  name: "john",
  email: "john.doe@example.com",
  isActive: true,
};
let user3: UserType = {
  name: "jane",
  email: "jane.doe@example.com",
  isActive: false,
};

// Function to create a user
function createUser(user: UserType) {}

// Using the createUser function with example users
createUser(user1);
createUser(user2);
createUser(user3);

// function createUser(user: UserType) {}

let user11 = { name: "zuraiz", email: "thezuraiz@gmail.com", isActive: false };
createUser(user11);

// // Read Only
type privateUser = {
  readonly _id: number;
  name: string;
  email: string;
  isActive?: boolean;
};

let pUser: privateUser = {
  _id: 2045,
  name: "Zuraiz Khan",
  email: "thezuraiz@gmail.com",
  isActive: false,
};

let printInfo = (user: privateUser) => {
  console.log(`id =>${user._id}`);
  //   user._id = 213; // It does not allow you to change that's value because its a readonly
  console.log(`id =>${user._id}`);
};

printInfo(pUser);

type BankAccount = privateUser & {
  bankName?: string;
  acctitle?: string;
  accNumber?: number;
  accountIBAN?: string;
};

// Example of a BankAccount object that combines privateUser properties with additional bank-related properties

let emp: BankAccount = {
  _id: 1203, // Unique identifier for the user (readonly)
  name: "zuraiz khan", // Name of the account holder
  email: "@gmail.com", // Email address of the account holder
  isActive: true, // Indicates if the account holder is active
  bankName: "UBL", // Name of the bank (optional property)
  acctitle: "The Zuraiz", // Title of the bank account (optional property)
  // accNumber: 12313209, // Account number (optional property)
  // accountIBAN: "1092319xqeokqe09213e", // IBAN of the account (optional property)
};
