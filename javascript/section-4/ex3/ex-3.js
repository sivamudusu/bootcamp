class Book {
  constructor(title, author,pages=0) {
    if (!title | !author) {
      throw new Error("to create a book you need title and author names");
      //   if the user tried to create book with no name and author name it will throw an error
    }
    this.title = title;
    this.author = author;
    this.pages = pages
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book){
    if(!(book instanceof Book)){
      throw new Error("only instance of Book class can be added ")
    }
    this.books.push(book);
  };
}

const GOT = new Book("game of thrones", "GRR martin");
const library = new Library();
library.addBook(GOT);
console.log(library.books);
