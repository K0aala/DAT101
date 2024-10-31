"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

for(let count110 = 1; count110 <= 10; count110++){
    printOut(count110.toString())
}
for(let count101 = 10; count101 >= 1; count101--){
    printOut(count101.toString())
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const targetNR = 45;
let guessedNumber = 0; 

while(targetNR !== guessedNumber){
    guessedNumber = Math.floor((Math.random() * 60) + 1)
}
printOut(guessedNumber + newLine)

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

guessedNumber = 0;
let guesses = 0;
const startTime = Date.now();
while (targetNR !== guessedNumber){
    guesses++;
    guessedNumber = Math.floor((Math.random() * 1000000) + 1);
}
const endTime = Date.now();
const timeUsed = endTime - startTime;

printOut("antall gjettinger = " + guesses + " in " + timeUsed + " ms")

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);  

function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; // is prime
}


let primeNumbers = [];
for (let num = 1; num <= 200; num++) {
    if (isPrime(num)) {
        primeNumbers.push(num);
    }
}

printOut(primeNumbers + newLine);


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

for(let row = 1; row <= 7; row++){
    let rowText = "";
    for(let column = 1; column <= 9; column++){
        rowText += "K" + column + "R" + row + "";
    }
    printOut(rowText);
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const points = Math.floor((Math.random() * 236) + 1);
const percent = points / 236 * 100;
let grade;

if(percent < 40){
    grade = "F";
}else if(percent < 52){
    grade = "E";
}else if(percent < 64){
    grade = "D";
}else if(percent < 76){
    grade = "C";
}else if(percent < 88){
    grade = "B";
}else {
    grade = "A"
}
printOut("The student got " + grade.toString() + " with " + Math.round(percent) +  "% and " + points + " points");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
