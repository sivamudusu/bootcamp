var suggestionsList = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
];

function showSuggestions() {
  var input = document.getElementById("autocompleteInput");
  var suggestionsContainer = document.getElementById("suggestionsContainer");

  suggestionsContainer.innerHTML = "";

  var inputValue = input.value.toLowerCase();
  var filteredSuggestions = suggestionsList.filter(function (suggestion) {
    return suggestion.toLowerCase().startsWith(inputValue);
  });

  filteredSuggestions.forEach(function (suggestion) {
    var suggestionElement = document.createElement("div");
    suggestionElement.className = "autocomplete-suggestion";
    suggestionElement.textContent = suggestion;

    suggestionElement.addEventListener("click", function () {
      input.value = suggestion;
      suggestionsContainer.innerHTML = "";
    });

    suggestionsContainer.appendChild(suggestionElement);
  });

  suggestionsContainer.style.display =
    filteredSuggestions.length > 0 ? "block" : "none";
}

document.addEventListener("click", function (event) {
  var suggestionsContainer = document.getElementById("suggestionsContainer");
  if (
    !event.target.matches("#autocompleteInput") &&
    !event.target.matches(".autocomplete-suggestion")
  ) {
    suggestionsContainer.style.display = "none";
  }
});
