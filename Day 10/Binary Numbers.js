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


///////// Ignore the above lines ///////
function main() {
    const n = parseInt(readLine(), 10);
    var binum = n.toString(2).split('0'); // this is array
    // var max = Math.max(...binum); // javascript array do not have the Math.max method so we use spread oerator(...)It takes in an iterable (e.g an array) and expands it into individual elements.
    var max = Math.max.apply(null,binum); //The apply() method takes arguments as an array. 
     console.log(max.toString().length); // this is string
    // console.log(max);

}
