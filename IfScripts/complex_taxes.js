"use strict";

//change pay rate, hours worked, and wether you're filing single (true or false)
let payRate = 10;
let hoursWorked = 45;
let filingSingle = true;

//prints the value
console.log(taxRateCalculation(payRate,hoursWorked,filingSingle));



//main function that calculates the taxRate based on pay rate, hours worked, and filing status.
function taxRateCalculation(payRate, hoursWorked, filingStatus){

//runs the weeklyPay function with the payRate and hoursWorked parameters and returns the weekly pay.
let weeklyGrossIncome = weeklyPay(payRate, hoursWorked);

//sets the filing status based on the third parameter
let filingSingle = filingStatus;

//declared the variables I know and will use
let taxRate;
let withheldWeeklyPay;

//calculates the annual income from the weekly
let annualGrossIncome = weeklyGrossIncome * 52;


//the blocks of code that determine the taxRate based on the income and filing status.
if(annualGrossIncome < 12000){

    if(filingSingle){
        //tax rate 5
        taxRate = .05;
    } else {
        //tax rate 0
        taxRate = 0;
    }

} else if (annualGrossIncome>=12000 && annualGrossIncome <=24,999.99){

    if(filingSingle){
        //tax rate 10
        taxRate = .10;
    } else {
        //tax rate 6
        taxRate = 0;
    }

} else if (annualGrossIncome>=12000 && annualGrossIncome <=24,999.99){
    
    if(filingSingle){
        //tax rate 15
        taxRate = .15;
    } else {
        //tax rate 11
        taxRate = .11;
    }

} else if (annualGrossIncome>=12000 && annualGrossIncome <=24,999.99){
    taxRate = .20;
}

//calculates the withheld pay from the grossincome and tax rate defined above.
withheldWeeklyPay = (weeklyGrossIncome * (taxRate))

//returns the block of text listing the values with additional context
return `You worked ${hoursWorked} hours this period.\nBecause you earn $${payRate.toFixed(2)} per hour, your gross pay is $${weeklyGrossIncome.toFixed(2)}
Your filing status is ${filingSingle ? 'Single' : "Joint"}
Your tax withholdings this period is $${withheldWeeklyPay.toFixed(2)}
Your net pay is ${(weeklyGrossIncome - withheldWeeklyPay).toFixed(2)}`;
}

//Function that calculates your weekly pay based on payrate and hours worked
function weeklyPay(payR, hours){
    
    //turns the parameters into local variables.
    let payRate = payR;
    let hoursWorked = hours;

    //declaration of other used variables
    let pay;
    let overtimePay;
    

    if(hoursWorked > 40){

        //calculation for overtime pay
        overtimePay = (payRate * 1.5) * (hoursWorked-40);
        pay = (payRate * 40) + overtimePay;
        
    } else {
    
        //calculation for normal pay
        pay = (payRate * hoursWorked);
    
    }
    
    //returns the pay.
    //could add a toString() to print something specific if it's called in console.log()?
    return pay;

}