"use strict";

let year = 2012;

//is a leap year when the year is divisible by 4 
//unless its divisible by 100
//in which case it needs to be divisible by 400

if(year % 4 == 0) {
    if(year % 100 == 0){
        if(year % 400 == 0){
            //leap year
            console.log(`${year} is a leap year`)
        } else {
            //not a leap year
            console.log(`${year} is NOT a leap year`)
        }
    } else {
        //leap year
        console.log(`${year} is a leap year`)
    }
} else {
    console.log(`${year} is NOT a leap year`)
}

