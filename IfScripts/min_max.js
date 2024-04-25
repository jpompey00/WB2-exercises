"use strict";

//Change these values to check
let integerA = 2;
let integerB = 3;
let integerC = 2;
//---------------------------

if(integerA > integerB && integerA > integerC){
    //A largest
    console.log(`Integer A: ${integerA} is largest`)
    if(integerB > integerC){
        //C smallest
        console.log(`Integer C: ${integerC} is smallest`)
    } else {
        //B smallest
        console.log(`Integer B: ${integerB} is smallest`)
    }
} else if(integerB > integerA && integerB > integerC){
    //B largest
    console.log(`Integer B: ${integerB} is largest`)
    if(integerA > integerC){
        //C smallest
        console.log(`Integer C: ${integerC} is smallest`)
    } else {
        //A smallest
        console.log(`Integer A: ${integerA} is smallest`)
    }
} else if(integerC > integerA && integerC > integerB){
    //C largest
    console.log(`Integer C: ${integerC} is largest`)
    if(integerB > integerA){
        //A smallest
        console.log(`Integer A: ${integerA} is smallest`)
    } else {
        //B smallest
        console.log(`Integer B: ${integerB} is smallest`)
    }
} else {
    //two values are equal
    console.log(`some values are equal`)
}