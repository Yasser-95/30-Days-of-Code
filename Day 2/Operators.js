'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    // meal_cost = 12 
    // tip_percent = 20
    // tax_percent = 8
    // Returns The function returns nothing. Print the calculated value, rounded to the nearest integer. 
    //  tip = 20/100*12 
    //  tax = 8/100*12
    // total_cost = meal_cost + tip + tax= 15.36 , convert to nearst integer 15


       var total_cost = Math.ceil((meal_cost)) + (tip_percent/100)*meal_cost + (tax_percent/100)*meal_cost;
       console.log(Math.floor(total_cost)); 



}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
