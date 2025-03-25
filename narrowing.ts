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

interface Circle {
  kind: "circle";
  radius: number;
}

interface Sqaure {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Sqaure | Rectangle;

/// Not recommended because if you add Shape as Rectagle its shows error
function getShape(shape: Shape) {
  if (shape.kind == "circle") {
    return Math.PI * shape.radius * 2;
  }
  // return shape.side * shape.side; // Uncomment to check its error
}

/// Recommended Way
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return shape.radius * shape.radius;

    case "square":
      return Math.PI * (shape.side * shape.side);

    case "rectangle":
      return shape.width * shape.length;

    default:
      // Now you can write future code as well
      let _defaultShape: never = shape;
      // never means you are going to use it never but if you are not using all cases of Shape it shows error
      return _defaultShape;
  }
}
