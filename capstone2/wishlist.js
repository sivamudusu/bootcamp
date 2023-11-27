const navbar = document.getElementById("nav-bar");
fetch("./nav.html")
  .then((res) => res.text())
  .then((data) => {
    navbar.innerHTML = data;
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(data, "text/html");
    // eval(doc.querySelector("script").textContent);
  });
  function menu() {
    const menu = document.getElementById("nav");
    menu.classList.toggle("toggle");
  }

function remove(index) {
  // Retrieve the cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Remove the item at the specified index
  const removedItem = cart.splice(index, 1);

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Remove the corresponding HTML element from the wishlist
  const wishlistItem = document.getElementById(index);
  wishlistItem.remove();

  console.log("Removed item:", removedItem);
}
const cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
const wishlist = document.getElementById("savedBooks");
if (cart) {
  cart.forEach((element, index) => {
    const { cover_i, author_name, title } = element; // Extract title here
    const book = document.createElement("div");
    book.className = "book";
    book.id = index;
    const coverSrc = cover_i
      ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
      : "./blank.jpg";
    book.innerHTML =
      `<img src=${coverSrc}>` +
      `<h3>Title: ${title}</h3>` + // Use the extracted title here
      `<p>Author: ${author_name[0]}</p>` + // Use the extracted author name here
      `<button onclick='remove(${index})'><i class="fa-solid fa-xmark"></i></button>`;
    wishlist.appendChild(book);
  });
}
