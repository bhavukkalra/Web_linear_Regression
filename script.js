/*
Default - 2
Global and can be accessed by any functions
*/

/*
No Imports can be utilized in 
this script
[IMP]

- All the functionalities has to be exported - Export also requires 
- module characteristics
- or Defined here - We can't define everything
- Take the Input from the Screen - TODO


*/
let numRows = 2;
let XHoursVals = []
let YPerfVals = []



// import {runMain} from './linear_regression.js'

// import {runMain} from 'linear_regression.js'


function createTable() {
    let NumberRowsInput = document.getElementById("rows").value;
    console.log("NumberRowsInput", NumberRowsInput);

    numRows = NumberRowsInput;
    renderTable();
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
        inputElementHour.setAttribute("name", "hoursVal")
    
        // insert input element inside table element
        tableDataElementHour.appendChild(inputElementHour);
    
        
        let inputElementPerf = document.createElement("input");
        let tableDataElementPerf = document.createElement("td");
    
        inputElementPerf.setAttribute("type", "text")
        inputElementPerf.setAttribute("placeholder", "Enter Performance value Here")
        inputElementPerf.setAttribute("name", "perfVal")


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