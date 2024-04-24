
"use strict";

//set the pay rate and hours worked for the program
let payRate = /*CHANGE VALUE TO PAY RATE */VALUE;
let hoursWorked = /*CHANGE VALUE TO THE HOURS WORKED */VALUE;
//-------------------------------------------

//declared other variables to be used
let pay;
let overtimePay;

if (hoursWorked > 40) {
    //calculates the pay if worked over 40 hours
    overtimePay = (payRate * 1.5) * (hoursWorked - 40);
    pay = (payRate * 40) + overtimePay;

} else {
    //calculates the pay if worked 40 hours or under
    pay = (payRate * hoursWorked);

}

console.log(pay)
//return pay;

