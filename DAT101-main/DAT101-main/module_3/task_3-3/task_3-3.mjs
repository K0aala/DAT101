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

function noVAT(daPrice, vatGroup){

  let taxGroup = vatGroup.toUppercase();
  let net = NaN;
  let vat = NaN;

  printOut("Taxgroup = " + taxGroup)
  
  switch (taxGroup){
  case "NORMAL":
  if (!Number.isNaN(vat)) {
    net = (100 * daPrice) / (25 + 100);
  }


}



printOut(net.toString());
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




printOut(newLine);
