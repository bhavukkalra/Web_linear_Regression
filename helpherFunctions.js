export function calculateMean(arrayOfNums){
    console.log("Started calculated mean")

    // Initialize a variable to keep track of the sum
    let sum = 0;

    // Iterate through the array and add up all the numbers
    for (let i = 0; i < arrayOfNums.length; i++) {
        console.log(typeof(arrayOfNums[i]))
        sum += arrayOfNums[i];
    }

    console.log("sum of Nums input to mean", sum)

    const mean = sum / arrayOfNums.length;

    // Display the mean
    console.log("Calculated Mean:", mean);

    return mean;
}


export function calculateStandardDeviation(arrayOfInputNums){

    let mean = calculateMean(arrayOfInputNums);

    //  Take sum of difference squared (difference of mean and Individual Term);

    let sumOfDifferenceSquare = 0;

    for(let i = 0; i < arrayOfInputNums.length; i++){
        let difference =  arrayOfInputNums[i] - mean;
        let differenceSqaured = difference*difference;

        
        sumOfDifferenceSquare += differenceSqaured;
    }

    console.log("sumOfDifferenceSquare", sumOfDifferenceSquare);

  
    // Divide the sumOfDifferenceSquare by (n - 1);

    let variance = sumOfDifferenceSquare/(arrayOfInputNums.length -1);

    /*  
    (StandardDeviation)^2 = variance

    OR 

    (StandardDeviation) = squareRoot(variance)

    */

    console.log("Variance - ", variance);
    let standardDeviation = calSqrRootBabylonianFormula(variance);
    console.log("standardDeviation - ", standardDeviation);


    return standardDeviation


}

/* 
Unoptimized for now, Will Optimize in the future
Could be done via logarithms in O(1)
*/
export function calSqrRootBabylonianFormula(inputNumber){

    // Check if the input is a valid number
    if (isNaN(inputNumber)) {
        return "Error: Invalid input. Please provide a valid decimal number.";
    }
    
    // Check if the input is a positive number
    if (inputNumber < 0) {
        return "Error: Cannot calculate square root of a negative number.";
    }
    
    // Initialize variables
    let root = inputNumber;
    let precision = 0.00001; // Set desired precision
    
    // Iterate until desired precision is achieved
    while ((root * root - inputNumber) > precision) {
        root = 0.5 * (root + (inputNumber / root));
    }
    
    // Return the result
    return root;
}






