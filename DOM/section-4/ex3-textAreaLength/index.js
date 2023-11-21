function updateCharacterCount() {
  // Get the textarea element by its ID
  var textarea = document.getElementById("message");

  // Get the value of the textarea
  var textareaValue = textarea.value;

  // Count the number of characters
  var characterCount = textareaValue.length;

  // Display the character count
  var characterCountDisplay = document.getElementById("characterCount");
  characterCountDisplay.textContent = "Character count: " + characterCount;
}
