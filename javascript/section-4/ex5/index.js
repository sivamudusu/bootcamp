class Book {
  constructor(title, author, pages) {
    if (!title | !author) {
      throw new Error("to create a book you need title and author names");
      //   if the user tried to create book with no name and author name it will throw an error
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class SpecialisedBook extends Book {
  constructor(title, author, pages,topic = "Genaral") {
    super(title, author, pages);
    this.topic = topic;
    
  }
}

const specialBook = new SpecialisedBook("GOT", "GRR Martin", 1000)
console.log(specialBook);
