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


const d1 = Math.ceil(Math.random() * 6);
const d2 = Math.ceil(Math.random() * 6);
const d3 = Math.ceil(Math.random() * 6);
const d4 = Math.ceil(Math.random() * 6);
const d5 = Math.ceil(Math.random() * 6);
const d6 = Math.ceil(Math.random() * 6);

let diceThrow = "";
diceThrow += d1.toString() + ",";
diceThrow += d2.toString() + ",";
diceThrow += d3.toString() + ",";
diceThrow += d4.toString() + ",";
diceThrow += d5.toString() + ",";
diceThrow += d6.toString();


printOut("diceThrow: " + diceThrow);

const count1 = (diceThrow.match(/1/g) || "").length;
const count2 = (diceThrow.match(/2/g) || "").length;
const count3 = (diceThrow.match(/3/g) || "").length;
const count4 = (diceThrow.match(/4/g) || "").length;
const count5 = (diceThrow.match(/5/g) || "").length;
const count6 = (diceThrow.match(/6/g) || "").length;

let diceCount = "";
diceCount += count1.toString() + ",";
diceCount += count2.toString() + ",";
diceCount += count3.toString() + ",";
diceCount += count4.toString() + ",";
diceCount += count5.toString() + ",";
diceCount += count6.toString();
printOut("diceCount: " + diceCount);

const equals1 = (diceCount.match(/1/g) || "").length;
const equals6 = (diceCount.match(/6/g) || "").length;
printOut("equals1: " + equals1.toString());
printOut("equals6: " + equals6.toString());

if(equals1 === 6){
  printOut("Full straight");
}else if(equals6 === 1){
  printOut("Yatzy!!!");
}


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
