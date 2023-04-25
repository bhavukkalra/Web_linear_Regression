

/*
See if these points can be plotted on a scatter plot on
the web

*/

/*
FEATURE SCALING

First We need to Normalize the Data

Normalization (Min-Max Scaler) - Scale down the features between [0, 1]

Standardization - Makes mean = 0 and standard deviation = 1

*/

// Task 1 - Calculate the Mean of x


// Task 2 (Pre) - handle Taking input from the Whole Table
// Task 2 - Calculate standard deviation

import { calculateMean } from "./helpherFunctions.js";


let XHoursVals = []
let YPerfVals = []
	



// This is the starting of the LinearRegresion
document.querySelector('#inputBtn').addEventListener('click', () => {
    // Call the imported function when the button is clicked
    // myFunction();
    console.log("here")
    takeInput();
  });


function takeInput(){

    // With new input, Empty the previous one
    if(XHoursVals.length != 0 || YPerfVals.length != 0){
        XHoursVals = []
        YPerfVals = []
    }

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
            alert("Some of the Fields are missing, Please Fill all");

            return;
        }

        YPerfVals.push(currVal);
        // console.log(currVal)
    }

    console.log("XHoursVals", XHoursVals);
    console.log("YPerfVals", YPerfVals);


    /*
    Below snippet renders the input on 
    the HTML Page

    */
    let spanHTMLElementHour = document.getElementById("XHoursArray");
    spanHTMLElementHour.innerHTML = XHoursVals;

    let spanHTMLElementPerf = document.getElementById("YPerfArray");
    spanHTMLElementPerf.innerHTML = YPerfVals;

    calculateMean(XHoursVals)

}





