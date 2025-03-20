function addTwoNumbers(num) {
  return num + 2;
}

addTwoNumbers(2);
addTwoNumbers("Two"); // It Takes string becz num type is ANY

// function getUpperCase(val) {
//   return val.toUpperCase(); // Its not showing sugguestion due to val type is ANY
// }

// Best Practices
function getUpperCase(val: string) {
  return val.toUpperCase(); // Its not showing sugguestion due to val type is ANY
}

// GetUpperCase(123); // Now Its showing Error
getUpperCase("I am String");

// function signUpUser(name, email, isPaid) {}

// signUpUser("Zuraiz", 123, 123); // Its not showing error just bcz function parameters type is ANY

/// Best Practices
function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("Zuraiz", "thezuraiz@gmail.com", false);

// In this function we are return two types of value that is not recommended
// function getValue(myValue: number) {
//   if (myValue > 5) {
//     return true;
//   } else {
//     return "200 OK";
//   }
// }

function getValue(myValue: number): string {
  if (myValue > 5) {
    return "true";
  } else {
    return "200 OK";
  }
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["spiderman", "superman", "thor"];

heros.map((e: string) => {
  return `Heros is ${e}`;
});
heros.map((e: string): string => {
  return `Heros is ${e}`;
});

function consoleErorr(err: string): void {
  console.log(err);
}

function handleError(err: string): never {
  throw new Error("I am error: " + err);
}
