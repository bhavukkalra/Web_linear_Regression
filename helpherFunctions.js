export function calculateMean(arrayOfNums){
    console.log("Started calculated mean")

    // Initialize a variable to keep track of the sum
    let sum = 0;

    // Iterate through the array and add up all the numbers
    for (let i = 0; i < arrayOfNums.length; i++) {
        sum += arrayOfNums[i];
    }

    const mean = sum / arrayOfNums.length;

    // Display the mean
    console.log("Calculated Mean:", mean);

    return mean;
}