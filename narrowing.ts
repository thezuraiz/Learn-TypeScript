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

function logValue(x: Date | string) {
  /// This is only works when you create instance with NEW keywords like new Date()
  if (x instanceof Date) {
    return x.toISOString;
  }
  return x.toLocaleUpperCase();
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim != null;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  }
  pet;
  // Now it not showing error but if you hover pet; Compiler not decided whether its a Fish or Bird
  // To overcome this you need to put isFish return type as PET IS FISH
  return "Bird Food";
}
