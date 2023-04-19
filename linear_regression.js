

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

// function takeXYInput(){

// }
import { calculateMean } from "./script2.js";
	
const XHoursStudied = [2, 3, 4, 5, -10];
const YPerformance = [0.1, 0.4, 0.6, 0.7];
// console.log(calculateMean)

let answer = calculateMean(XHoursStudied);

console.log(answer);

function runMain(){
    console.log("Run On main")
}

// calculateMean(XHoursStudied);




