"use strict"

//rule of 72 : time to double investment  = 72 / interest rate

var interestRate = 3;
var bankAccount = 24;

console.log("At a " + interestRate + "% interest rate, your savings account will be worth $" + (bankAccount * 2).toFixed(2)
+ " in about " + (72/interestRate).toFixed(1) + " Years" )