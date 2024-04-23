"use strict"

//distance formula:
//  sqrt((x2-x1)^2 + (y2-y1)^2 )

//CHANGE BASED ON THE COORDINATES
var x1 = 0;
var y1 = 1;

var x2 = 10;
var y2 = 11;

//Distance formula conversion, rounded to 2 decimal points
var distanceConversion = (Math.sqrt((x2-x1)**2 + (y2-y1)**2)).toFixed(2)

//output
//checked with https://www.omnicalculator.com/math/distance
console.log(`The distance between points (${x1},${y1}) and (${x2},${y2}) is ${distanceConversion}`)


