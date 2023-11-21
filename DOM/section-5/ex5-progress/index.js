window.addEventListener("scroll", function () {
  var totalHeight = document.body.scrollHeight - window.innerHeight;


  var scrollPercentage = (window.scrollY / totalHeight) * 100;


  document.getElementById("progress-bar").style.width = scrollPercentage + "%";


  var progressContainer = document.getElementById("progress-container");
  progressContainer.style.display = window.scrollY > 20 ? "block" : "none";
});
