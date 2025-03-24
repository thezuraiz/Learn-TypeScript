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
