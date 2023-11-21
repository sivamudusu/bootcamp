const target = document.getElementById("highlight");

target.addEventListener("mouseover", function () {
  this.style.color = "red";
});
target.addEventListener("mouseleave", function () {
    this.style.color = "black";
  });
