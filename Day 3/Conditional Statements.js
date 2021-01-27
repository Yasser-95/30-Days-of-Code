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

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5 , print Not Weird
// If n is even and in the inclusive range of 6 to 20 , print Weird
// If n is even and greater than 20 , print Not Weird

function main() {
    const N = parseInt(readLine(), 10);
    if (N %2==0 && N > 20){
        console.log("Not Weird");
   } else if (N %2==0 && (N >2 && N<=5)) {
        console.log("Not Weird");
    } else {
    console.log("Weird");
  }
} 


     
