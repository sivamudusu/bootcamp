const area = document.getElementById("text-Container");
const slider = document.getElementById("slider");

slider.addEventListener("input", function () {
  area.style.fontSize = this.value + "PX";
});
