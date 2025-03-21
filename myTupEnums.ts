let tUser: [string, number, boolean];
// tUser = ['abds',false,3] // This shoes error bcz of sequences
tUser = ["adad", 3, false]; // You have to always obay the sequesnce

/// USE CASE
let rgb: [number, number, number];
rgb = [2, 4, 2];

// Tuples always Issue on PUSH menthods
type USer = [number, string];

const newUser: USer = [123, "asdos"];
// Now you can manuplaute it using Array Methods
newUser[1] = "Zuraiz";
// newUser.push(false); // Now Its showing Error
