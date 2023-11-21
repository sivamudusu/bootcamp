const button = document.getElementById("color");
const body = document.body;
let color = "white";
button.addEventListener("click", () => {
  let random = Math.round(Math.random() * 999);
  let random1 = Math.round(Math.random() * 999);

  console.log(random);
  if (color === "white") {
    body.style.backgroundColor = `#${random}${random1}`;
  }
});

// #64A5EB
