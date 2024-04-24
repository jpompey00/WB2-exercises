"use strict";

//let it convert from am to pm
let hour= 18;

if(hour <= 10){
    console.log(`Good Morning!`)
} else if (hour > 10 && hour < 17 ){
    console.log(`Good day!`)
} else {
    console.log(`Good evening!`)
}