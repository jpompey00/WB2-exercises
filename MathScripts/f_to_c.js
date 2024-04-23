"use strict"


//CHANGE FARHRENHEIT FOR DIFFERENT CONVERSIONS
var farhrenheit = 90;

//Formula for celcius. 
var convertedCelsius = 5/9 * (farhrenheit - 32);

//The output to 3 decimal places.
console.log(`${farhrenheit} degrees Farhrenheit is ${convertedCelsius.toFixed(3)} Celsius`);