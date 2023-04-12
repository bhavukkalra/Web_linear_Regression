
function createTable() {
console.log("Inside createTable")

var rows = document.getElementById("rows").value;
// var columns = document.getElementById("columns").value;

// var table = document.createElement("table");
let table = document.getElementById("table")
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

// create table header row
// var headerRow = document.createElement("tr");
// for (var i = 0; i < columns; i++) {
// 	var th = document.createElement("th");
// 	th.innerHTML = "Header " + (i+1);
// 	headerRow.appendChild(th);
// }
// thead.appendChild(headerRow);tbody
// table.appendChild(thead);

// create table data rows
if(rows < 2){
    let formErrorElement = document.getElementById("formError");
    formErrorElement.innerHTML = "Please enter an Input > 2";
    return;

}else if(rows == 2){
    let formErrorElement = document.getElementById("formError");
    formErrorElement.innerHTML = "2 rows already exists";
    return;

}

console.log("After Error");

for (var i = 0; i < rows - 2; i++) {
    var tr = document.createElement("tr");
    // Add Data for Hours studied
    let inputElementHour = document.createElement("input");
    let tableDataElementHour = document.createElement("td");

    inputElementHour.setAttribute("type", "text")
    inputElementHour.setAttribute("placeholder", "Enter Hours Studied Here")


    tableDataElementHour.appendChild(inputElementHour)



    // <td><input type="text" placeholder="5"></td>


    // Add data for performace

    let inputElementPerf = document.createElement("input");
    let tableDataElementPerf = document.createElement("td");

    inputElementPerf.setAttribute("type", "text")
    inputElementPerf.setAttribute("placeholder", "Enter Performance value Here")

    tableDataElementPerf.appendChild(inputElementPerf)

    // tableDataElement.appendChild(inputElement)

    // Add both the table dat to data row
    tr.appendChild(tableDataElementHour)
    tr.appendChild(tableDataElementPerf)

    // Add both the tabe rows to table body

    tbody.appendChild(tr)


}
table.appendChild(tbody);

// add table to container
// var container = document.getElementById("table-container");
// container.innerHTML = "";
// container.appendChild(table);
}

function addRow() {
var table = document.getElementById("table");
var tbody = table.getElementsByTagName("tbody")[0];

var newRow = document.createElement("tr");
console.log("table", table)
console.log("tbody", tbody)
console.log("table.rows[0]", table.rows[0])
console.log("table.rows[0].cells", table.rows[0].cells) // HTML Collection (Containing 2 rows)
console.log("table.rows[0].cells.length", table.rows[0].cells.length) // the number 2 
// console.log("table", table)


for (var i = 0; i < table.rows[0].cells.length; i++) {
    var cell = document.createElement("td");
    var input_cell = document.createElement("input");
    
    input_cell.setAttribute("type", "text")
    input_cell.setAttribute("placeholder", "Enter Value Here")

    


    cell.appendChild(input_cell)

    // cell.innerHTML = "New Row, Column " + (i+1);
    newRow.appendChild(cell);
}
tbody.appendChild(newRow);
}

// function addColumn() {
// 	var table = document.getElementById("table");

// 	for (var i = 0; i < table.rows.length; i++) {
// 		var cell = document.createElement("td");
// 		cell.innerHTML = "New Column";
// 		table.rows[i].appendChild(cell);
// 	}
// }