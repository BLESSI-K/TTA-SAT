//..........Methods..........
// push methods
let bookStore=["Book1","Book2","Book3","Book4","Book5"];
bookStore.push('Book6');
console.log(bookStore) //Add items at the end
//pop Methods
bookStore.pop();
console.log(bookStore); //Removes items at the end
//pop and push work only at the end
//.....Shift methods.......
bookStore.shift();  //remove item at the beginning
console.log(bookStore);
// .....unshift method....
bookStore.unshift("new book"); ///adding new item at the start of the book
console.log(bookStore);
// splice method
bookStore.splice(0,1,"New Book1");
console.log(bookStore)

// ...indexof method
const index=  bookStore.indexOf("Book2");
console.log(index)