const from = document.getElementById("form");
const button = document.getElementById("add");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userInput = document.getElementById("input").value;
  const ul = document.getElementById("ul");

  const li = document.createElement("li");
  li.textContent = userInput;
  console.log(li);
  ul.appendChild(li);
  
});
