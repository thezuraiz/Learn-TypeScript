/// TYPE
// ========================================================================
var user = { name: "Zuraiz Khan", email: "thezuraiz@gmail.com" };
console.log("username", user.name);
var book = {
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
function identity(value) {
    console.log("Type: ", typeof value);
    return value;
}
// Ab yeh kisi bhi type pe kaam karega:
console.log(identity(42));
console.log(identity(42)); // Output: 42
console.log(identity("Hello")); // Output: Hello
console.log(identity(true)); // Output: true
