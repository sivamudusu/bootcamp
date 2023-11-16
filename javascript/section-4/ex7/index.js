class Author {
  constructor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
}

class Book {
  constructor(title, authors = [], pages = 0, topic = "General") {
    if (!title || authors.length === 0) {
      throw new Error("Title and at least one author are mandatory.");
    }

    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.topic = topic;
  }
}

class Catalog {
  constructor() {
    this.catalog = new Map();
  }

  addBook(book) {
    if (!this.catalog.has(book.topic)) {
      this.catalog.set(book.topic, []);
    }
    this.catalog.get(book.topic).push(book);
  }
}

class Library {
  constructor() {
    this.catalog = new Catalog();
  }

  addBook(book) {
    this.catalog.addBook(book);
  }
}

const author1 = new Author("F. Scott Fitzgerald", 1896, "American");
const author2 = new Author("Zelda Fitzgerald", 1900, "American");

const authors = [author1, author2];

const regularBook = new Book("The Great Gatsby", authors, 300);
const specializedBook = new Book(
  "Introduction to Quantum Mechanics",
  authors,
  400,
  "Quantum Physics"
);

const myLibrary = new Library();
myLibrary.addBook(regularBook);
myLibrary.addBook(specializedBook);

console.log(myLibrary.catalog);
