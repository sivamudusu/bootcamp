class Author {
  constructor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
}

class Book {
  constructor(title, authors = [], pages = 0, topic = "General") {
    if (!title | (authors.length === 0)) {
      throw new Error("title and atleast one author is mandatory");
    }
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.topic = topic;
  }
}

class FictionBook extends Book {
  constructor(title, authors, pages, genre) {
    super(title, authors, pages, "Fiction");
    this.genre = genre;
  }
  getRecommendation() {
    return `Check out this exciting ${this.genre} fiction book: "${this.title}"!`;
  }
}

class NonFictionBook extends Book {
  constructor(title, authors, pages, field) {
    super(title, authors, pages, "Non-Fiction");
    this.field = field;
  }

  getOverview() {
    return `Explore the ${this.field} field with "${this.title}" - a great non-fiction read!`;
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

const fictionBook = new FictionBook(
  "The Great Gatsby",
  [author1],
  300,
  "Classic"
);
const nonFictionBook = new NonFictionBook(
  "Sapiens: A Brief History of Humankind",
  [author2],
  400,
  "Anthropology"
);

const myLibrary = new Library();
myLibrary.addBook(fictionBook);
myLibrary.addBook(nonFictionBook);

console.log(myLibrary.catalog.catalog);
console.log(fictionBook.getRecommendation());
console.log(nonFictionBook.getOverview());
