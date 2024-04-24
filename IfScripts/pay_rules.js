
"use strict";


    let payRate;
    let hoursWorked;
    
    let pay;
    let overtimePay;
    
    if(hoursWorked > 40){
        overtimePay = (payRate * 1.5) * (hoursWorked-40);
    
        pay = (payRate * 40) + overtimePay;
        
    } else {
    
        pay = (payRate * hoursWorked);
    
    }
    
    // console.log(pay)
    return pay;

