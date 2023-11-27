const navbar = document.getElementById("nav-bar");
fetch("./nav.html")
  .then((res) => res.text())
  .then((data) => {
    navbar.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });



async function getData(key) {
  try {
    const response = await fetch(`https://openlibrary.org${key}/ratings.json`);
    const data = await response.json();
    // console.log(data.docs);
    return data.summary;
  } catch (err) {
    console.log(err);
  }
}
async function getAuthor(olid) {
  try {
    const response = await fetch(
      `https://openlibrary.org/authors/${olid}.json`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
async function getBook(key) {
  try {
    const response = await fetch(`https://openlibrary.org${key}.json`);
    const data = await response.json();
    // console.log(data.docs);
    return data;
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  // Retrieve the selected book's data from localStorage
  const selectedBook = JSON.parse(localStorage.getItem("selectedBook"));

  //   console.log(rating);

  // Use the selectedBook data to populate the details on the page
  if (selectedBook) {
    const { key } = selectedBook;
    console.log(key);

    //   const workBook = getData(key);
    //   console.log(workBook);
    // Retrieve the selected book's data from localStorage
    const rating = await getData(key);
    const book = await getBook(key);
    console.log(rating);
    console.log(book);
    console.log(selectedBook);
    // Use the selectedBook data to populate the details on the page
    const {
      cover_i,
      author_name,
      first_sentence,
      subject,
      first_publish_year,
    } = selectedBook;
    const { average, count } = rating;
    const { title, description } = book;
    const img_container = document.getElementById("book-img");
    const img = document.createElement("img");
    img.src = `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`;
    img_container.appendChild(img);
    const button = document.createElement("button");
    button.innerHTML = "Add to Favorites";
    button.id = "add-to-favorites";
    button.addEventListener("click", () => {});
    img_container.appendChild(button);
    const content_container = document.getElementById("book-content");
    const content_title = document.createElement("h1");
    content_title.innerHTML = title;
    content_container.append(content_title);
    const author = document.createElement("div");
    author.classList.add("author");
    author.innerHTML = author_name[0];
    content_container.append(author);
    const rating_container = document.createElement("div");
    rating_container.id = "rating_container";
    rating_container.style.display = "flex";
    content_container.append(rating_container);
    if (!isNaN(average)) {
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Fill the star based on the rating

        if (i <= Math.round(average)) {
          star.style.backgroundColor = "#ffcc20"; // Set the color for filled stars
        }
        rating_container.append(star);
      }
    } else {
      // const noRatingText = document.createElement("div");
      // noRatingText.textContent = "No rating available";
      // rating_container.append(noRatingText);
    }

    const rating_count = document.createElement("div");
    rating_count.id = "rating_count";
    rating_count.innerHTML = `${average ? average.toFixed(1) : "no rating"}`; //average.toFixed(1);
    rating_container.append(rating_count);
    const reviews = document.createElement("div");
    reviews.id = "reviews";
    reviews.innerHTML = `${count} Reviews`;
    rating_container.append(reviews);
    const content_description = document.createElement("p");
    content_description.id = "content_description";
    content_description.innerHTML = `${
      description ? description : "Description not availabale"
    }`; //description;
    content_container.append(content_description);
    const content_first_sentence = document.createElement("p");
    content_first_sentence.id = "content_first_sentence";
    content_first_sentence.innerHTML = `${
      first_sentence
        ? first_sentence
        : "usually first sentenses goes here but we cant find any"
    }`;
    content_container.append(content_first_sentence);
    const genre = document.createElement("div");
    genre.id = "genres";
    const genre_id = document.createElement("div");
    genre_id.id = "genre_id";
    genre_id.innerHTML = "genere";
    genre.append(genre_id);
    const genres = document.createElement("div");
    genres.id = "genres_list";
    if (!isNaN(subject)) {
      genres.innerHTML = "Genre data not available";
    } else {
      for (let i = 0; i <= (subject.length > 7 ? 7 : subject.length - 1); i++) {
        const genre_name = document.createElement("span");
        genre_name.innerHTML = subject[i];
        genres.append(genre_name);
      }
    }

    genre.append(genres);
    content_container.append(genre);
    const content_publish_date = document.createElement("p");
    content_publish_date.id = "content_publish_date";
    content_publish_date.innerHTML = `First Published: ${first_publish_year}`;
    content_container.append(content_publish_date);

    const about = document.createElement("div");
    about.classList.add("about-author")
    about.innerText = "About the Author";
    content_container.append(about);
    const { author_key } = selectedBook;
    const authorSection = document.getElementById("Author");
    const olid = author_key[0];
    const authorData = await getAuthor(olid);
    if(authorData){
      let { personal_name, bio,birth_date,photos} = authorData;

      const dp_name = document.createElement("div");
      dp_name.className="dp_name";
      const dp = document.createElement("img");
      // dp.src=photos?
    }

    console.log(authorData);
  } else {
    // Handle the case where there is no selected book data
    console.error("No selected book data found.");
  }

  // Clear the selectedBook data from localStorage (optional, depending on your needs)
  //   localStorage.removeItem("selectedBook");
});
function menu() {
  const menu = document.getElementById("nav");
  menu.classList.toggle("toggle");
}
const footer = document.getElementById("footer")
fetch("./footer.html")
.then((res) => res.text())
.then((data) => {
  footer.innerHTML = data;
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");
  eval(doc.querySelector("script").textContent);
});