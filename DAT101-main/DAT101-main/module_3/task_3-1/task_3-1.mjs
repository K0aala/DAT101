"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
printOut(newLine);

let wakeUpTime = 8;
const ableBusTime = 7;
const ableTrainTime = 8;

if (wakeUpTime == ableBusTime) {
  printOut("I can take the bus to school.");
}else if(wakeUpTime == ableTrainTime){
printOut("if I wake up at exactly 8 o'clock i'll be able to take the train, if not then the care has to be taken...")
}else{
  printOut("if i wake up at exactly 7 o'clock ill be able to take the but, or if i wake up at exactly 8 i'll be able to take the train," +
    " if im not able to wake up at neither then ill have to take the car :(")
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const int1 = 10+2;
const int2 = 10+3;

if(int1 < int2){
  printOut("positive")
}else if(int1 == int2){
printOut("ZEROOOOOO")
}else(printOut("Negative"));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const minSizeOfFile = 4;
const fileSize1 = Math.floor(Math.random()*8 + 1);

printOut(fileSize1 + " is the file size");

if(fileSize1 > minSizeOfFile){
  printOut("Thank you")
}else(printOut("Your file is too small..."));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const fileSize2 = Math.floor(Math.random()*8 + 1);
const maxSizeOfFile = 6;

printOut(fileSize2 + " is the file size");

if(fileSize2 > maxSizeOfFile){
  printOut("Your file is too large :(")
}else if(fileSize2 < minSizeOfFile){
  printOut("File is too small :(")
}else(printOut("Thank you :)"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

  let includeR = monthName.indexOf("r").toString()
  printOut("Month is = " + monthName)

if(includeR = "r"){
  printOut("You must take vitamin D")
}else(printOut("You do not need to take vitamin D"))

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if(monthName == monthList[3,5,8,10]){
  printOut("there are 30 days in " + monthName.toString())
}else if(monthName == monthList[1]){
  printOut("There are 28 days in " + monthName.toString() + " during a normal year")
}else(printOut("There are 31 days in " + monthName.toString()))

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/


if(monthName == monthList[2,4]){
  printOut("The art gallery is unfortunately closed :(");
}else if(monthName == monthList[3]){
  printOut("The art gallery is partially open :)");
}else(printOut("The art gallery is OPEN!! :)"));

printOut("Replace this with you answer!");
printOut(newLine);