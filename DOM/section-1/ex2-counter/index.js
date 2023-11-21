// document.addEventListener("DOMContentLoaded", function () {
  const plus = document.getElementById("incre");
  const minus = document.getElementById("decre");
  const val = document.getElementById("count");
  var count = 0;

  plus.addEventListener("click", function () {
    count++;
    val.textContent = count;
  });

  minus.addEventListener("click", function () {
    count--;
    val.textContent = count;
  });
// });
