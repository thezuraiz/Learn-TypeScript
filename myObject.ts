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
