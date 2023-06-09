

/*
See if these points can be plotted on a scatter plot on
the web

*/

/*
FEATURE SCALING

First We need to Normalize the Data

Normalization (Min-Max Scaler) - Scale down the features between [0, 1]

Standardization - Makes mean = 0 and standard deviation = 1
Formula - ((x - mean)/(std)) 

*/

// Task 1 - Calculate the Mean of x


// Task 2 (Pre) - handle Taking input from the Whole Table
// Task 2 - Calculate standard deviation

import { calculateMean, calculateStandardDeviation, standardizeInputArray } from "./mathHelpherFunctions.js";
import { gradient, gradientDescent } from "./linearRegressionHelperFunctions.js";


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

    /*
        characters container numbers [Array]
        Convert them to numbers
    */
    console.log("XHoursVals", XHoursVals);
    console.log("YPerfVals", YPerfVals);

    let XHoursValsNum = []
    let YPerfValsNum = []

    for(let i = 0; i < XHoursVals.length; i++){
        XHoursValsNum.push(XHoursVals[i] * 1);
        YPerfValsNum.push(YPerfVals[i] * 1);

    }

    /*
    Below snippet renders the input on 
    the HTML Page

    */
    let spanHTMLElementHour = document.getElementById("XHoursArray");
    spanHTMLElementHour.innerHTML = XHoursVals;

    let spanHTMLElementPerf = document.getElementById("YPerfArray");
    spanHTMLElementPerf.innerHTML = YPerfVals;

    // calculateMean(XHoursVals);
    // console.log("Operating on - ", XHoursValsNum)
    // calculateStandardDeviation(XHoursValsNum);

    // let stdArrayX = standardizeInputArray(XHoursValsNum);

    let temp_theta = [0, 0];
    // let current_slope = gradient(XHoursValsNum, YPerfValsNum, temp_theta);
    // console.log("current_slope", current_slope)

    let return_values = gradientDescent(XHoursValsNum, YPerfValsNum);
    console.log("return_values", return_values);

    console.log("return_values[theta]", return_values["theta"]);
    console.log("return_values[error_list]", return_values["error_list"]);






}





