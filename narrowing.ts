function detectType(value: string | number) {
  if (typeof value == "string") {
    return value.toLocaleLowerCase();
  }
  //   return value.toUpperCase(); // It Doesnot allowed by the typescript
  return value + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toLocaleLowerCase();
}

function printAll(strs: string | string[] | null) {
  // !!!!!!! !!!!!!!
  // DON'T DO THIS!
  // KEEP READING
  // Because "" empty string is equilent to truthy value
  // !!!!!!! !!!!!!!!
  if (strs) {
    if (typeof strs == "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs == "string") {
      console.log(strs);
    }
  }
}

interface User {
  email: string;
  passwords: string;
}

interface Admin extends User {
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    // Now you got Admin Object
    return account.isAdmin;
  }
  // Lets try to return Admin here
  //   return account.isAdmin; // Error
  return false;
}
