/*
Default - 2
Global and can be accessed by any functions
*/
let numRows = 2;



function createTable() {
    let NumberRowsInput = document.getElementById("rows").value;
    console.log("NumberRowsInput", NumberRowsInput);

    numRows = NumberRowsInput;
    renderTable();



// console.log("Inside createTable");

// var rows = document.getElementById("rows").value;
// // var columns = document.getElementById("columns").value;

// // var table = document.createElement("table");
// let table = document.getElementById("table")
// var thead = document.createElement("thead");
// var tbody = document.createElement("tbody");

// // create table header row
// // var headerRow = document.createElement("tr");
// // for (var i = 0; i < columns; i++) {
// // 	var th = document.createElement("th");
// // 	th.innerHTML = "Header " + (i+1);
// // 	headerRow.appendChild(th);
// // }
// // thead.appendChild(headerRow);tbody
// // table.appendChild(thead);

// // create table data rows
// if(rows < 2){
//     let formErrorElement = document.getElementById("formError");
//     formErrorElement.innerHTML = "Please enter an Input > 2";
//     return;

// }else if(rows == 2){
//     let formErrorElement = document.getElementById("formError");
//     formErrorElement.innerHTML = "2 rows already exists";
//     return;

// }

// console.log("After Error");

// for (var i = 0; i < rows - 2; i++) {
//     var tr = document.createElement("tr");
//     // Add Data for Hours studied
//     let inputElementHour = document.createElement("input");
//     let tableDataElementHour = document.createElement("td");

//     inputElementHour.setAttribute("type", "text")
//     inputElementHour.setAttribute("placeholder", "Enter Hours Studied Here")


//     tableDataElementHour.appendChild(inputElementHour)



//     // <td><input type="text" placeholder="5"></td>


//     // Add data for performace

//     let inputElementPerf = document.createElement("input");
//     let tableDataElementPerf = document.createElement("td");

//     inputElementPerf.setAttribute("type", "text")
//     inputElementPerf.setAttribute("placeholder", "Enter Performance value Here")

//     tableDataElementPerf.appendChild(inputElementPerf)

//     // tableDataElement.appendChild(inputElement)

//     // Add both the table dat to data row
//     tr.appendChild(tableDataElementHour)
//     tr.appendChild(tableDataElementPerf)

//     // Add both the tabe rows to table body

//     tbody.appendChild(tr)


// }
// table.appendChild(tbody);

// // add table to container
// // var container = document.getElementById("table-container");
// // container.innerHTML = "";
// // container.appendChild(table);
}

function addRow() {
    numRows++;
    console.log("numRows", numRows);
    renderTable();


}

function renderTable(){
    console.log("Here")

    let table = document.getElementById("table");
    let tbody = document.getElementsByTagName("tbody")[0];
    console.log("tbody before", tbody)



    console.log("table", table)
    console.log("tbody", tbody)
    
    // let tbody = table.getElementsByTagName("tbody")[0];


    let currentNumRows = document.getElementsByTagName("tr").length - 1;
    console.log("currentNumRows", currentNumRows);
    console.log("numRows", numRows);

    
    for (let i = currentNumRows; i < numRows; i++) {
        // Create New row for each entry
        let newRow = document.createElement("tr");
        console.log(newRow)

        // Add Data for Hours studied
        let inputElementHour = document.createElement("input");
        let tableDataElementHour = document.createElement("td");
        
        // Add Input elements tags
        inputElementHour.setAttribute("type", "text")
        inputElementHour.setAttribute("placeholder", "Enter Hours Studied Here")
    
        // insert input element inside table element
        tableDataElementHour.appendChild(inputElementHour);
    
        
        let inputElementPerf = document.createElement("input");
        let tableDataElementPerf = document.createElement("td");
    
        inputElementPerf.setAttribute("type", "text")
        inputElementPerf.setAttribute("placeholder", "Enter Performance value Here")
    
        tableDataElementPerf.appendChild(inputElementPerf)
    
    
        // Add both the table dat to data row
        newRow.appendChild(tableDataElementHour)
        newRow.appendChild(tableDataElementPerf)

        console.log("newRow -- ", newRow)
    
        // Add both the tabe rows to table body
        tbody.appendChild(newRow);
    
        
    }
    
    console.log("tbody latest", tbody)
    

}


// function addColumn() {
// 	var table = document.getElementById("table");

// 	for (var i = 0; i < table.rows.length; i++) {
// 		var cell = document.createElement("td");
// 		cell.innerHTML = "New Column";
// 		table.rows[i].appendChild(cell);
// 	}
// }