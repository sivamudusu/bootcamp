document.getElementById("search").addEventListener("input", function () {
  var searchItem = this.value.toLocaleLowerCase();
  const listItems = document.querySelectorAll("#list li");

  listItems.forEach((item) => {
    var textContent = item.textContent.toLocaleLowerCase();
    if (textContent.includes(searchItem)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
