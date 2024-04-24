"use strict";

//let it convert from am to pm
let hour= 18;

if(hour <= 10){ //checks if hours less than 10

    console.log(`Good Morning!`)

} else if (hour > 10 && hour < 17 ){ //checks if the hours are between 10 and 17
    console.log(`Good day!`)

} else { //runs if none of the other conditions are met
    
    console.log(`Good evening!`)
}