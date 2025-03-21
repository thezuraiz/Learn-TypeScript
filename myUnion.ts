// let score: number = 203;
// score = "String Not Allowed";

let score: number | string = 203;
score = "Now Allowed to use Strings";

type User = {
  name: string;
  email: string;
};

type Admin = {
  id: string;
  name: string;
  designation: string;
};

let zuraiz: User | Admin = {
  name: "Zuraiz Khan",
  email: "thezuraiz@gmail.com",
  /// You can use optional data as well
  designation: "Assiciates Software Engineer",
};

// You can use reuse it with Admin type as well
zuraiz = {
  id: "234",
  name: "Zuraiz Khan",
  designation: "Associates Software Engineer",
};

function getDbId(id: number | string) {
  console.log(`DB Id id => ${id}`);
}

getDbId(234);
getDbId("234");

function getDdData(id: number | string) {
  // If you are using multiple types, compilar dont show relivent sugguestions
  //   let sId = id.toLoWerCase();
  // Solution
  if (typeof id == "string") {
    // Low you use string functions
    let sId = id.toLowerCase();
    console.log(sId);
  } else {
    // Now it shows Number functons
    let sId = id.toFixed();
    console.log(id);
  }
  console.log(`DB Id id => ${id}`);
}

/// Array

const data: number[] = [1, 2, 3, 4];

// const data2: number[] | string[] = ["1", 2, "4"];  Not Allowed

// If you want to use multiple types in types Always use this approach
const data2: (string | number)[] = ["12", 123, 123, "eqwe"];

/// Dont use this approach
const data3: any[] = ["12", 123, 123, "eqwe"];

// You can do this ---  NOT RECOMMENDED
let PI: 3.14 = 3.14;
// PI = 2.453;

// Some how Like ENUMS
let seatAllotment: "window" | "aisal" | "middle";
seatAllotment = "aisal";
// But you can not Assign any other string into it
// seatAllotment = "crew";
