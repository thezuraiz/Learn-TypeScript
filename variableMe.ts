// String
let greetings: string = "Hello World";
console.log(greetings.toUpperCase());
// Number
let id: number = 300;
console.log(id.toFixed());
// Boolean
let flag: boolean = false;
console.log(flag);

// Best Practices

// String
let myName = "Zuraiz Khan";
console.log(myName.toLocaleLowerCase());

// Number
let userId: number;
userId = 3234;
console.log(userId);

// Boolean
let isLoggedIn = false;
console.log(isLoggedIn);

// You do not need to write types on every variable Initialization

export {}; // This prevents type error for some time

// Built-in types
// The following table illustrates all the built-in types in TypeScript −

// Data type	Keyword	Description
// Number	number	Double precision 64-bit floating point values. It can be used to represent both, integers and fractions.
// String	string	Represents a sequence of Unicode characters
// Boolean	boolean	Represents logical values, true and false
// Void	void	Used on function return types to represent non-returning functions
// Null	null	Represents an intentional absence of an object value.
// Undefined	undefined	Denotes value given to all uninitialized variables
// Symbol	symbol	A unique and immutable primitive introduced in ES2015.
// Object	object	Represents instances of user-defined classes, arrays, functions, etc.
// Never	never	Represents values that never occur.
