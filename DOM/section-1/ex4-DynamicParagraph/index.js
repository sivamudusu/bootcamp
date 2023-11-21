const div = document.getElementById("dyn");
const button = document.getElementById("add");

button.addEventListener("click", function () {
  let newp = document.createElement("p");
  newp.textContent = "hi this is dynamically added para";

  div.append(newp);
  console.log(newp);
});
