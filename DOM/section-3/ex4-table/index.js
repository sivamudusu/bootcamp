function addRow() {
  const add = document.getElementById("add");
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  // console.log(table);
  let lastrow = table.rows[table.rows.length - 1];
  var lastNum = parseInt(lastrow.cells[0].textContent);
  var num = lastNum + 1;

  const newRow = table.insertRow();
  const cell = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  cell.textContent = num;
  cell2.textContent = "new name";
  cell3.textContent = "new Age";
}
function remove() {
  const table = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  if (table.rows.length > 1) {
    // Delete the last row
    table.deleteRow(table.rows.length - 1);
  } else {
    alert("Cannot delete the last row. The table must have at least one row.");
  }
}
