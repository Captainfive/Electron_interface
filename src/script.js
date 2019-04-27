const arr = ["addon1", "addon2", "addon3"];

  function addRow(array) {
    let tableRef = document.getElementById("addon-table");

  for ( let ind of array ) {
    let newRow = tableRef.insertRow(0);
    let newCell = newRow.insertCell(0);
        let newText = document.createTextNode(ind);
        newCell.appendChild(newText);
  }
}
  addRow(arr);