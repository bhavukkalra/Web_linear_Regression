/*
Default - 2
Global and can be accessed by any functions
*/
let numRows = 2;
let XHoursVals = []
let YPerfVals = []


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

function testKeysInputTable(){
    let hoursArray = document.getElementsByName("hoursVal")
    let perfArray = document.getElementsByName("perfVal")

    console.log(hoursArray)
    console.log(perfArray)


    // Fill the input X array
    for(let i = 0; i < hoursArray.length; i++){
        
        let currVal = hoursArray[i].value;
        if(currVal == ""){
            console.log("Can't do it ");
            alert("Some of the Fields are missing, Please Fill all")
            return;
        }


        XHoursVals.push(currVal);
        console.log("currVal", currVal)


    }

    // Fill the input Y array
    for(let y = 0; y < perfArray.length; y++){
        let currVal = perfArray[y].value;

        if(currVal == ""){
            console.log("Can't do it ")
            alert("Some of the Fields are missing, Please Fill all")

            return;
        }

        YPerfVals.push(currVal);
        // console.log(currVal)


    }

    console.log("XHoursVals", XHoursVals)
    console.log("YPerfVals", YPerfVals)




}