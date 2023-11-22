document.addEventListener("DOMContentLoaded", function () {
  console.log("loded");
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const container = document.getElementById("container");

  console.log(container);
  for (let i = 100; i < 1000; i++) {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.classList.add("number")
    if (i % 2 === 0) {
      div.classList.add("even");
    } else {
      div.classList.add("odd");
    }

    if (isPrime(i)) {
      div.classList.add("prime");
    }

    div.textContent = i;
    container.appendChild(div);
  }
});
