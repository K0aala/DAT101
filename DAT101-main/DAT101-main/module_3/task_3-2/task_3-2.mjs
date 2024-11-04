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

 let answer = "";
  let rolls = 0;
  let done = false;
  let hasYahtzee = false;   
  let hasStraight = false;  
  let has3Pair = false;      
  let hasTower = false;     
  do {
    const d1 = Math.ceil(Math.random() * 6);  
    const d2 = Math.ceil(Math.random() * 6);  
    const d3 = Math.ceil(Math.random() * 6);  
    const d4 = Math.ceil(Math.random() * 6);  
    const d5 = Math.ceil(Math.random() * 6);  
    const d6 = Math.ceil(Math.random() * 6);  
    const txtD = (d1 + "," + d2 + "," + d3 + "," + d4 + "," + d5 + "," + d6); 
    rolls++;  
    if ((d1 === d2) && (d1 === d3) && (d1 === d4) && (d1 === d5) && (d1 === d6)) {
      
      if (hasYahtzee === false) {
        hasYahtzee = true;
        answer += txtD + newLine;
        answer += "Yatzi!" + newLine;
        answer += "På " + rolls.toString() + " kast!" + newLine + newLine;
      }
    } else {
      
      
      const cD1 = (txtD.match(/1/g) || "").length; 
      const cD2 = (txtD.match(/2/g) || "").length;
      const cD3 = (txtD.match(/3/g) || "").length;
      const cD4 = (txtD.match(/4/g) || "").length;
      const cD5 = (txtD.match(/5/g) || "").length;
      const cD6 = (txtD.match(/6/g) || "").length;
      if ((cD1 === 1) && (cD2 === 1) && (cD3 === 1) && (cD4 === 1) && (cD5 === 1) && (cD6 === 1)) {
        
        if (hasStraight === false) {
          hasStraight = true;
          answer += txtD + newLine;
          answer += "Full straight" + newLine;
          answer += "På " + rolls.toString() + " Kast!" + newLine + newLine;
        }
      } else {
        
        const txtCD = cD1 + "," + cD2 + "," + cD3 + "," + cD4 + "," + cD5 + "," + cD6;
        const ccD2 = (txtCD.match(/2/g) || "").length;
        const ccD4 = (txtCD.match(/4/g) || "").length;
        if (ccD2 === 3) {
          
          if (has3Pair === false) {
            has3Pair = true;
            answer += txtD + newLine;
            answer += "3 Par" + newLine;
            answer += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        } else if ((ccD2 === 1) && (ccD4 === 1)) {
        
          if (hasTower === false) {
            hasTower = true;
            answer += txtD + newLine;
            answer += "Tårn" + newLine;
            answer += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        }
      }
    }
    done = hasYahtzee && hasStraight;
  } while (done === false);
  printOut(answer + newLine);

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
