"use strict"

//rule of 72 : time to double investment  = 72 / interest rate

var interestRate = 3;
var bankAccount = 24;


let result = `At a ${interestRate}% interest rate, your savings account will be worth $${(bankAccount*2).toFixed(2)} in about ${(72/interestRate).toFixed(1)} Years`

//result with string concatenation
console.log("At a " + interestRate + "% interest rate, your savings account will be worth $" + (bankAccount * 2).toFixed(2)
+ " in about " + (72/interestRate).toFixed(1) + " Years" )



//result with string Literals

console.log(result)