/// TYPE
// ========================================================================
var user = { name: "Zuraiz Khan", email: "thezuraiz@gmail.com" };
console.log("username", user.name);
var book = {
    name: "Atomic Habbit",
    publishDate: Date().toString(),
    price: 3000,
};
var eBook = {
    name: "Atomic Habbit",
    publishDate: Date().toString(),
    price: 3000,
    //   type: "pdf",
    //   link: "http/google.com",
};
var printBooks = function (books) {
    books.map(function (e) {
        console.log("name: ", e.name);
        console.log("Date: ", e.publishDate);
        console.log("Price: ", e.price);
        console.log("Type: ", e.type);
        console.log("link: ", e.link);
    });
};
printBooks([eBook]);
