"use strict";

let year = 2012;

//is a leap year when the year is divisible by 4 
//unless its divisible by 100
//in which case it needs to be divisible by 400

if(year % 4 == 0) { //checks if the year is divisible by 4

    if(year % 100 == 0){ //checks if the year is divisible by 100

        if(year % 400 == 0){ //checks if the year is divisible by 400

            //if divisible by 4, 100, and 400, it IS a leap year
            console.log(`${year} is a leap year`)

        } else {
            //if divisible by only 4 and 100, it is NOT a leap year
            console.log(`${year} is NOT a leap year`)
        }
    } else {
        //if divisble by 4, it IS a leap year
        console.log(`${year} is a leap year`)
    }
} else {
    //if not divisible by 4, it is NOT a leap year
    console.log(`${year} is NOT a leap year`)
}

