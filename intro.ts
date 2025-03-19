/// TYPE
// ========================================================================

let user = { name: "Zuraiz Khan", email: "thezuraiz@gmail.com" };
console.log("username", user.name);
// console.log('username',user.age);

// type User = {
//     name: string;
//     age: number;
//     phoneNumber: string;
//   };

//   let user1: User = {
//     name: "Zuraiz Khan",
//     age: 20,
//     phoneNumber: "03001234029",
//   };
//   let user2: User = {
//     name: "Abdullah",
//     age: 15,
//     phoneNumber: "03001234567",
//   };

//   let printUser = (users: User[]): void => {
//     users.map((e) => {
//       console.log(e.age);
//     });
//   };

//   printUser([user1, user2]);

// ========================================================================
/// Interface

// interface Transactions {
//   transactionId: number;
//   senderId: number;
//   receiverId: number;
// }
// interface BankAccount {
//   accountId: number;
//   accoundHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transactions[];
// }

// let transaction: Transactions = {
//   transactionId: 1 - 23123,
//   senderId: 121 - 2312,
//   receiverId: 123 - 23121,
// };
// const bankAccount: BankAccount = {
//   accountId: 123213,
//   accoundHolder: "Zuraiz Khan",
//   balance: 2312,
//   isActive: true,
//   transactions: [transaction, transaction],
// };

interface Book {
  name: string;
  publishDate: string;
  price: number;
}
let book: Book = {
  name: "Atomic Habbit",
  publishDate: Date().toString(),
  price: 3000,
};
// console.log(`Book: ${book.name}`);

// let printBooks = (books: Book[]) => {
//   books.map((e) => {
//     console.log("name: ", e.name);
//     console.log("Date: ", e.publishDate);
//     console.log("Price: ", e.price);
//   });
// };

// printBooks([book]);

// interface Ebook extends Book {
//   type?: string;
//   link?: string;
// }

// let eBook: Ebook = {
//   name: "Atomic Habbit",
//   publishDate: Date().toString(),
//   price: 3000,
//   type: "pdf",
//   link: "http/google.com",
// };

// let printBooks = (books: Ebook[]) => {
//   books.map((e) => {
//     console.log("name: ", e.name);
//     console.log("Date: ", e.publishDate);
//     console.log("Price: ", e.price);
//     console.log("Type: ", e.type);
//     console.log("link: ", e.link);
//   });
// };

// printBooks([eBook]);

// ========================================================================
/// Generics

// function identity<T>(value: T): T {
//   console.log("Type: ", typeof value);

//   return value;
// }

// // Ab yeh kisi bhi type pe kaam karega:
// console.log(identity(42));
// console.log(identity(42)); // Output: 42
// console.log(identity<string>("Hello")); // Output: Hello
// console.log(identity<boolean>(true)); // Output: true

interface User {
  name: string;
  password: string;
}

const fetchData = async (path: string): Promise<User[] | undefined> => {
  try {
    let response = await fetch(`http://placeholer/${path}`);
    return response.json();
  } catch (e) {
    console.log("Error: ", e);
    return undefined;
  }
};

(async () => {
  let user = await fetchData("/users");
  if (user && user.length > 0) {
    console.log(user[0].name);
    console.log(user[0].password);
  }
})();
