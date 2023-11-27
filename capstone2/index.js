const navbar = document.getElementById("nav-bar");
fetch("./nav.html")
  .then((res) => res.text())
  .then((data) => {
    navbar.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });

const carousel = document.getElementById("carousel");

function shiftCarousel() {
  const firstItem = carousel.firstElementChild;
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = "translateX(" + -firstItem.offsetWidth + "px)";
  setTimeout(() => {
    carousel.appendChild(firstItem);
    carousel.style.transition = "none";
    carousel.style.transform = "translateX(0)";
  }, 500);
}

setInterval(shiftCarousel, 3000);
const footer = document.getElementById("footer");
fetch("./footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

function getCart() {
  const cartString = localStorage.getItem('cart');
  return cartString ? JSON.parse(cartString) : [];
}
async function getData(key, searchType) {
  let url = `https://openlibrary.org/search.json?q=${key}&page=1`;
  if (searchType === "author") {
    url = `https://openlibrary.org/search.json?author=${key}&sort=new`;
  } else if (searchType === "title") {
    url = `https://openlibrary.org/search.json?title=${key}`;
  } else if (searchType === "genre") {
    url = `https://openlibrary.org/search.json?q=/[a-z]+/&genre=${key}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.docs);
    return data.docs;
  } catch (err) {
    console.log(err);
  }
}
const loader = document.getElementById("loader");
const container = document.getElementById("container");

const form = document.getElementById("form");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  localStorage.removeItem("result");
  let name = document.getElementById("search-text").value;
  let searchType = document.getElementById("search-type").value;
  console.log(searchType);
  showLoader();

  try {
    let array = await getData(name, searchType);

    localStorage.setItem("result", JSON.stringify(array));
    if (localStorage.getItem("result")) {
      // Reload the page
      window.location.reload();
    }

    // const covered = array.filter((obj) => {
    //   if (obj.hasOwnProperty("cover_i")) {
    //     return obj;
    //   }
    // });
    // console.log(covered);
    // console.log(array);

    // let ans = sortAscending(sortAscending)

    hideLoader();

    render();
  } catch (error) {
    console.error(error);
    hideLoader();
  }
});
render();
const sortByInc = document.getElementById("sortByInc");
sortByInc.addEventListener("click", function (e) {
  // e.preventDefault();
  sortAscending();
  render();
});
function sortAscending() {
  const localArry1 = JSON.parse(localStorage.getItem("result"));
  if (Array.isArray(localArry1)) {
    // Sort the array based on the published year in ascending order
    const sorted = localArry1.sort(
      (a, b) => a.first_publish_year - b.first_publish_year
    );

    localStorage.removeItem("result");
    localStorage.setItem("result", JSON.stringify(sorted));

    // Print the sorted array
  } else {
    console.error("The data from the API is not an array.");
  }
}
const sortByDec = document.getElementById("sortByDec");
sortByDec.addEventListener("click", function (e) {
  // e.preventDefault();
  sortDescending();
  render();
});
function sortDescending() {
  const localArry2 = JSON.parse(localStorage.getItem("result"));
  if (Array.isArray(localArry2)) {
    // Sort the array based on the published year in ascending order
    const sorted2 = localArry2.sort(
      (a, b) => b.first_publish_year - a.first_publish_year
    );

    localStorage.removeItem("result");
    localStorage.setItem("result", JSON.stringify(sorted2));

    // Print the sorted array
  } else {
    console.error("The data from the API is not an array.");
  }
}
function menu() {
  const menu = document.getElementById("nav");
  menu.classList.toggle("toggle");
}

function goSearch() {
  window.location.href = "./hero.html";
}
function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}
const moreFiltersButton = document.getElementById("more-filters");
const filterWindow = document.getElementById("filter-window");
const closeFiltersButton = document.getElementById("close-filters-button");

moreFiltersButton.addEventListener("click", function () {
  filterWindow.classList.toggle("open");
  moreFiltersButton.classList.toggle("toggleClick");
});

closeFiltersButton.addEventListener("click", function () {
  filterWindow.classList.remove("open");
});

function render() {
  let newArr = JSON.parse(localStorage.getItem("result"));
  if (Array.isArray(newArr)) {
    newArr.forEach((doc, index) => {
      const container = document.getElementById("container");
      const div = document.createElement("div");
      const { title, author_name, key, cover_i, first_publish_year, language } =
        doc;
      const img_buttons = document.createElement("div");
      img_buttons.classList.add("img_buttons");

      const img = document.createElement("img");
      img.src = cover_i
        ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
        : "./blank.jpg";
      img.alt = title;
      div.classList.add("book");
      img.addEventListener("click", function () {
        localStorage.setItem("selectedBook", JSON.stringify(doc));
        window.location.href = "./Book.html";
      });
      img_buttons.append(img);
      //
      const button_container = document.createElement("div");
      button_container.classList.add("buttonContainer");
      button_container.id = `button${index}`;
      img_buttons.append(button_container);
      const btn = document.createElement("button");
      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-heart");
      btn.appendChild(icon);
      button_container.append(btn);
      const btn2 = document.createElement("button");
      const icon2 = document.createElement("i");
      icon2.classList.add("fa-solid", "fa-plus");
      btn2.appendChild(icon2);
      button_container.append(btn2);
      btn2.addEventListener("click",function(e){
        e.preventDefault();
        const cart = getCart();
        cart.push(doc);
        localStorage.setItem('cart', JSON.stringify(cart));
      })
      const btn3 = document.createElement("button");
      const icon3 = document.createElement("i");
      icon3.classList.add("fa-solid", "fa-share");
      btn3.appendChild(icon3);
      button_container.append(btn3);

      div.append(img_buttons);
      // <i class="fa-regular fa-heart"></i>

      div.addEventListener("mouseenter", function () {
        document.getElementById(`button${index}`).style.visibility = "visible";
      });
      div.addEventListener("mouseleave", function () {
        document.getElementById(`button${index}`).style.visibility = "hidden";
      });

      const book_title = document.createElement("div");
      book_title.classList.add("book-title");
      book_title.innerHTML = title.slice(0, 20);
      div.append(book_title);
      const book_author = document.createElement("div");
      book_author.classList.add("book-author");
      book_author.innerHTML = `Author : ${author_name ? author_name[0] : ""}`;
      div.append(book_author);
      const language_id = document.createElement("div");
      language_id.classList.add("language_id");
      language_id.innerHTML = `Language : ${
        language ? language[0] : "no info"
      }`;
      div.append(language_id);
      const year = document.createElement("div");
      year.classList.add("year");
      year.innerHTML = `Published year : ${first_publish_year}`;
      div.append(year);

      // console.log(title, author_name[0], key, cover_i, first_publish_year);
      // h2.append(
      //   (document.createElement("img").src =
      //     `https://covers.openlibrary.org/b/id/${doc.cover_i
      // }-S.jpg`).
      // );
      container.append(div);
    });
  } else {
    console.error("Invalid or missing data in localStorage.");
  }
}

// const applyForm = document.getElementById("apply-form");
// applyForm.addEventListener("submit", function (e) {
//   // Retrieve filter values and apply filtering logic
//   const genre = document.getElementById("genre").value;
//   const author = document.getElementById("Year-inc").value;
//   const year = document.getElementById("Year-dec").value;
//   const ratings = document.getElementById("ratings").value;

//   // Call a function to apply filters with the retrieved values
//   applyFilters(genre, author, year, ratings);

//   // Close the filter window
//   filterWindow.classList.remove("open");
// });

// function applyFilters(genre, author, year, ratings) {
//   // Implement your logic to filter based on the provided values
//   // You can use these values to fetch new data from your API or manipulate the existing data
//   // For simplicity, this example just logs the values to the console
//   console.log("Genre:", genre);
//   console.log("year-inc:", author);
//   console.log("year-dec:", year);
//   console.log("User Ratings:", ratings);
// }