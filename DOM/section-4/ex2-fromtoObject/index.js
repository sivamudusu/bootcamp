document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const object = {};

  const form = document.getElementById("form");
  console.log(form);
  var formElements = form.getElementsByTagName("input");
  console.log(formElements);

  for (let i = 0; i < formElements.length; i++) {
    object[formElements[i].id] = formElements[i].value;
  }
  console.log(object);
  //   const comment = document.getElementById("text");
  //   console.log(comment.value);
});
