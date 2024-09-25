"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*
 Display both the original expression and the modified expression (with parentheses) 
 along with their results on the HTML page. 
*/
printOut(newLine);
const Answer1 =  2 + 3 * 2 - 4* 6;
printOut("Answer of expression without parentheses = " + Answer1);
const Answer1_1 = 2 + (3 * (2 - 4)) * 6; 
printOut("Answer of expression with parentheses = " + Answer1_1);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* 
Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres 
(maximum 2 decimal places in the answer).
*/
printOut(newLine);
const millininch = 25.4;
const millinmeter = 1000;
const q2 = 25.34 
const AnswerInInch = q2 * (millinmeter / millininch);
const answerininch = AnswerInInch.toFixed(2);
printOut(q2 + " meters is " + answerininch + "inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes.
*/
printOut(newLine);
printOut( "3 days, 12 hours, 14 minutes, and 45 seconds to minutes." );

const hoursinday = 24, P3days = 3
const minsinhour = 60, P3hours = 12
const P3mins = 14
const secinmins = 60, P3sec = 45

const answerdaystomins = (P3days * hoursinday) * minsinhour 
const answerhourstomins = (P3hours * minsinhour)
const answersectomins = P3sec / secinmins
const P3answer = answerdaystomins + answerhourstomins + answersectomins + P3mins 

printOut( "The answer is " + P3answer + " minutes" );
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). 
The task must be solved with primitives.*/

const nuofmin = 6322.52; 
let part4calc = nuofmin / ( 60 * 24);
const part4days = Math.floor(part4calc); 
printOut("days = "+ part4days);

part4calc = part4calc - part4days; 
part4calc = part4calc * minsinhour;
const part4hour = Math.floor(part4calc);
printOut("Hours = " + part4hour);

part4calc = part4calc - part4hour;
part4calc = part4calc * minsinhour;
const part4mins = Math.floor(part4calc);
printOut("Minutes =" + part4mins ); 

part4calc = part4calc - part4mins;
part4calc = part4calc * secinmins; 
const part4sec = Math.floor(part4calc);
printOut("Seconds = " + part4sec)
printOut("Answer = ↑");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
printOut("Convert 54 dollars (USD) to Norwegian Krone (NOK)");
printOut(newLine); 
const NOK = 76 / 8.6;
const USD = 8.6 / 76; 
let AmountUSD = 54; 
const AmountNOK = Math.round(AmountUSD * NOK);
AmountUSD = Math.round(AmountNOK * USD)
printOut(AmountUSD + " USD is " + AmountNOK + " NOK");
printOut(AmountNOK + " NOK is " + AmountUSD + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
 Print the number of characters in the text.
 Print the character at position number 19.
 Print the characters starting at position number 35 and 8 characters forward.
 Print the index at which "earth" starts in the text
*/

printOut("'There is much between heaven and earth that we do not understand.'")
printOut(newLine)

const p6 = "There is much between heaven and earth that we do not understand."
printOut("There are " + p6.length.toString() + " characters in the sentence")
printOut("It is the character " + "'" + p6.charAt(19).toString() +"'" + " in position 19")
printOut("Answer = " + "'" + p6.substr(35,8).toString() + "'")
printOut("Answer = " + p6.indexOf("earth").toString())

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* 
 ● Is 5 greater than 3?
 ● Is 7 greater than or equal to 7?
 ● Is "a" greater than "b"?
 ● Is "1" less than "a"?
 ● Is "2500" less than "abcd"?
 ● "arne" is not equal to "thomas".
 ● (2 equals 5) is this statement true?
 ● ("abcd" is greater than "bcd") is this statement false?
*/

const p7A = 5 > 3
printOut ("5 > 3 = " + p7A.toString())

const p7B = 7 >= 7
printOut("7 >= 7 = " + p7B.toString())

const p7C = "a" > "b" 
printOut("'a' > 'b' = " + p7C.toString())

const p7D = 1 < "a"
printOut("'1' < 'a' = " + p7D.toString())

const p7E = "2500" < "abcd"
printOut("'2500' < 'abcd' = " + p7E.toString())

const p7F = ("arne" != "thomas")
printOut("'arne' is not equal to 'thomas'? " + p7F.toString())

const p7G = (2 === 5)
printOut("(2 === 5) === true is " + p7G.toString())

const p7H = "abcd" < "bcd"
printOut("('abcd' < 'bcd') === false is, " + p7H.toString())

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* 
Convert and print the following expressions:
  from text "254" to a number
  from text "57.23" to a number
  from text "25 kroner" to a number
*/

const p8A = "254"; 
const p8A_answer = parseInt(p8A); 
printOut("'254' = " + p8A_answer + newLine)

const p8B = "57.23"
const p8B_answer = parseInt(p8B)
printOut("'57,23' = " + p8B_answer)

const p8C = "25 kroner"; 
const p8C_answer = parseInt(p8C).toString()
printOut("25 kroner = " + p8C_answer + newLine)

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* 
  Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
*/

let r = Math.floor((Math.random() * 360) + 1);
printOut("let r = Math.floor((Math.random() * 360) + 1); = " + r)

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* 
Use modulus (%) to calculate how many weeks and days are in 131 days.
*/

const p10to = 131 
const daysinweek = 7 

const p10days = p10to % daysinweek
printOut("days = " + p10days)

const p10weeks = (p10to - p10days) / daysinweek 
printOut("weeks = " + p10weeks)


printOut(newLine);