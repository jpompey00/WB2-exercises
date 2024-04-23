"use strict"

//CHANGE TO YOUR SALARY
var salary = 12000;

//constant for the federal tax percentage
const FEDERAL_TAX_PERCENTAGE = .25;

//The formula for calculating how much should be withheld
var moneyWithheld = (salary * FEDERAL_TAX_PERCENTAGE).toFixed(2);


//The output
console.log(`Your salary is $${salary}, the amount that you should withhold for your federal taxes are $${moneyWithheld}`)
