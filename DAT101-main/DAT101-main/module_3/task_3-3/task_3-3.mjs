"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine)

function dateFinder(){
    const date = new Date();
printOut(date.toLocaleDateString('no-NB', {
    dateStyle: 'full'}));
    return date
    }dateFinder();

       
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const theDateToday = dateFinder()

function theAmountOfDays(finalDay, endTxt){
const dateTill = new Date(finalDay); 
const remaindingDays = dateTill - theDateToday

const days = Math.floor(remaindingDays / (1000 * 60 * 60 * 24));
const hours = Math.floor((remaindingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((remaindingDays % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((remaindingDays % (1000 * 60)) / 1000);

printOut(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + endTxt)
}
theAmountOfDays("2025, 03, 14", " till the release!!!") 


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//DCA = diameter, circumference, and area.

function findDCA(radius){
const diameter = radius * 2;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * Math.pow(radius, 2)

printOut ("The diameter of the circle is " + diameter.toFixed(2).toString() + " when the radius is " + radius.toFixed(2).toString())
printOut ("The circumference of the circle is " + circumference.toFixed(2).toString() + " when the radius is " + radius.toFixed(2).toString())
printOut ("The area of the circle is " + area.toFixed(2).toString() + " when the radius is " + radius.toFixed(2).toString())
}findDCA(5)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//find the circumference and area 
printOut("Find the circumference and area of a rectangle")
function findRectCA(width, hight){

    const circumference = (hight * 2) + (width * 2);
    const area = width * hight;

    printOut("Width: " + width.toFixed(2))
    printOut("Hight: " + hight.toFixed(2))
    printOut("circumference: " + circumference.toFixed(2))
    printOut("Area: " + area.toFixed(2))
}findRectCA(3,6)
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ETemperaturType = { Celsius: 1, Fahrenheit: 2, Kelvin: 3 };

function convertTemperature(aTemperature, aType) {
  let Fahrenheit = 0;
  let Celsius = 0;
  let Kelvin = 0;
  switch (aType) {
    case ETemperaturType.Celsius:
      printOut("Convert from Celsius");
      //convert to Fahrenheit
      //Fahrenheit = (Kevin - 237.15)*9/5 + 32;
      Celsius = aTemperature;
      Fahrenheit = (Celsius * 9) / 5 + 32;
      Kelvin = Celsius + 273.15;
      break;
    case ETemperaturType.Fahrenheit:
      printOut("Convert from Fahrenheit");
      Fahrenheit = aTemperature;
      Celsius =  (Fahrenheit - 32) / 1.8;
      Kelvin = ((Fahrenheit - 32) / 1.8) + 273.15;
      break;
    case ETemperaturType.Kelvin:
      printOut("Convert from Kelvin");
      Kelvin = aTemperature;
      Fahrenheit = ((Kelvin - 273.15) * 9/5) + 32;
      Celsius = (Kelvin - 273.15);
      //Fahrenheit = (Celsius * 9) / 5 + 32;
      break;
  } 

  printOut("Celsius = " + Celsius.toFixed(0));
  printOut("Fahrenheit = " + Fahrenheit.toFixed(0));
  printOut("Kelvin = " + Kelvin.toFixed(0));
} 

convertTemperature(37, ETemperaturType.Kelvin);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function calculateNetPrice(aPrice, aTaxGroup) {
  let net = NaN;
  let taxGroup = aTaxGroup.toUpperCase();
  let vat = NaN;

  printOut("taxGroup = " + taxGroup);

  switch (taxGroup) {
    case "NORMAL":
      vat = 25;
    case "HOTEL" + "CINEMA" + "TRANSPORT":
      vat = 10;
    case "FOOD":
      vat = 15;
  }

  if (!Number.isNaN(vat)) {
    net = (100 * aPrice) / (vat + 100);
  }

  return net;
  
  
}

const daPrice1 = calculateNetPrice(100, "normal")
if (Number.isNaN(daPrice1)){
  printOut("unknown VAT?!?")
}else{
  printOut("Da PRICE is = " + daPrice1.toFixed(2) + "NOK")
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateSpeedDistanceTime(speed, distance, time) {
  // Check if more than one parameter is missing
  const missingParams = [speed, distance, time].filter(param => param === 0).length;
  if (missingParams > 1) {
      return NaN;
  }
const theTime = distance / speed
const theSpeed = distance / time
const theDistance = speed * time

printOut("Speed " + "( " + theSpeed + " )" + " = " + "Distance ( " + distance + " )" + " / " + "Time ( " + time + " )" )


}

calculateSpeedDistanceTime(4, 14)
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function modifyString(text, maxSize, char, addToStart) {
 
  // Check if the first parameter is a string
  if (typeof text !== "string") {
    text = "Error: The first parameter is not a string."
      return text; // Returns new text value if the input is invalid
  }

  // Check the current size of the string
  if (text.length >= maxSize) {
      // If text is already at or above the maximum size, return it as is
      return text;
  }

  // Calculate how many characters need to be added
  const charsToAdd = maxSize - text.length;

  // Create the string of characters to be added
  const addedChars = char.repeat(charsToAdd);

  // Modify the string based on the boolean value `addToStart`
  const modifiedString = addToStart ? addedChars + text : text + addedChars;


  // Return the modified string
  return modifiedString;
}



const theText1 = modifyString("Thingy is absolute gold mannen ", 20, "*", false)
printOut(theText1 + newLine)


const theTextNoWork = modifyString(312, 13, ".", true)
printOut(theTextNoWork)

const theTextNotLong = modifyString("hello", 10, "#", false)
printOut(theTextNotLong)

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testIfMathIsFun() {
  let op = 1;
  let line = 1;
  // Left side
  let ok = false;
  do {
    let sumLeft = 0;
    for (let left = 0; left < line + 1; left++) {
      sumLeft += op;
      op++;
    }

    let sumRight = 0;
    for (let right = 0; right < line; right++) {
      sumRight += op;
      op++;
    }

    if (sumLeft !== sumRight) {
      ok = false;
      printOut("Error in line " + line.toString());
    }else{
      ok = true;
    }
    line++;

    if(line > 200){
      printOut("Math is Fun!");
      break;
    }
    
  } while (ok);
}

testIfMathIsFun();


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function factorial(n, original = n) {

  if (n === 0 || n === 1) {
      return 1;
  }

  
  let result = n * factorial(n - 1, original);
  
  if (n === original) {

    let sequence = Array.from({ length: original }, (_, i) => i + 1).join(" * ")
      printOut("The factorial of " + original + "! = " + sequence + " = " +  + result);
  }

  return result; 
}


factorial(5); 
factorial(6); 


printOut(newLine);
