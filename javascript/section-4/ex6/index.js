class Author {
  constructor(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
}
class Book {
  constructor(title, authors = [], pages = 0) {
    if (!title | (authors.length === 0)) {
      throw new Error("title and atleast one author is mandotaory");
      //   if the user tried to create book with no name and author name it will throw an error
    }
    this.title = title;
    this.authors = authors;
    this.pages = pages;
  }
}

const author1 = new Author("JRR talkien", "1970", "Uk");
const author2 = new Author("leo tolstoy", "1980", "USA");

const book1 = new Book("The lord of the Rings", 200);

book1.author.push(author1, author2);
console.log(book1);
